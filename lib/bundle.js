const lemonade = (function() {
  
  const l =
      typeof setImmediate !== 'undefined'
        ? setImmediate
        : typeof process !== 'undefined'
          ? process.nextTick
          : setTimeout;

    
const n = u;
  function u(n, t) {
    (this.fork = n), (this.cleanup = t || function() {});
  }
  (u.of = u.prototype.of = function(r) {
    return new u(((n, t) => t(r)));
  }),
    (u.rejected = u.prototype.rejected = function(t) {
      return new u(((n) => n(t)));
    }),
    (u.prototype.map = function(e) {
      const n = this.fork;
      return new u(((t, r) => n(
          (n) => t(n),
          (n) => r(e(n))
        )), this.cleanup);
    }),
    (u.prototype.chain = function(e) {
      const n = this.fork;
      return new u(((t, r) => n(
          (n) => t(n),
          (n) => e(n).fork(t, r)
        )), this.cleanup);
    }),
    (u.prototype.ap = function(n) {
      const h = this.fork;

        
const y = n.fork;

        
const t = this.cleanup;

        
const r = n.cleanup;
      function d(n) {
        t(n[0]), r(n[1]);
      }
      return new u(((t, r) => {
        let e;

          
let o;

          
let u;

          
let i = !1;

          
let c = !1;

          
let f = !1;

          
const n = h(
            s,
            a((n) => {
              (i = !0), (e = n);
            })
          );

          
const p = y(
            s,
            a((n) => {
              (c = !0), (o = n);
            })
          );
        function a(t) {
          return function(n) {
            if (!f)
              return (
                t(n),
                i && c
                  ? (l(() => {
                      d(u);
                    }),
                    r(e(o)))
                  : n
              );
          };
        }
        function s(n) {
          if (!f) return (f = !0), t(n);
        }
        return (u = [n, p]);
      }), d);
    }),
    (u.prototype.concat = function(n) {
      const c = this.fork;

        
const f = n.fork;

        
const t = this.cleanup;

        
const r = n.cleanup;
      function p(n) {
        t(n[0]), r(n[1]);
      }
      return new u(((n, t) => {
        let r;

          
let e = !1;

          
const o = c(i(n), i(t));

          
const u = f(i(n), i(t));
        return (r = [o, u]);
        function i(t) {
          return function(n) {
            if (!e)
              return (
                (e = !0),
                l(() => {
                  p(r);
                }),
                t(n)
              );
          };
        }
      }), p);
    }),
    (u.prototype.empty = u.empty = function() {
      return new u((() => {}));
    }),
    (u.prototype.toString = function() {
      return 'Task';
    }),
    (u.prototype.orElse = function(e) {
      const n = this.fork;
      return new u(((t, r) => n(
          (n) => e(n).fork(t, r),
          (n) => r(n)
        )), this.cleanup);
    }),
    (u.prototype.fold = function(r, e) {
      const o = this.fork;
      return new u(((n, t) => o(
          (n) => t(r(n)),
          (n) => t(e(n))
        )), this.cleanup);
    }),
    (u.prototype.cata = function(n) {
      return this.fold(n.Rejected, n.Resolved);
    }),
    (u.prototype.swap = function() {
      const n = this.fork;
      return new u(((t, r) => n(
          (n) => r(n),
          (n) => t(n)
        )), this.cleanup);
    }),
    (u.prototype.bimap = function(e, o) {
      const n = this.fork;
      return new u(((t, r) => n(
          (n) => t(e(n)),
          (n) => r(o(n))
        )), this.cleanup);
    }),
    (u.prototype.rejectedMap = function(e) {
      const n = this.fork;
      return new u(((t, r) => n(
          (n) => t(e(n)),
          (n) => r(n)
        )), this.cleanup);
    });
  const t = n;

    
const r = function(i, c, f) {
      return new t(((n, t) => {
        let r;

          
let e;

          
let o;

          
const u = new XMLHttpRequest();
        u || n({ error: 'Unable to create a XMLHttp instance.' }),
          (u.onreadystatechange = ((r = u),
          (e = n),
          (o = t),
          function() {
            try {
              r.readyState === 4 &&
                ((t = r.status),
                [200, 201, 202, 203, 204, 205, 206].some((n) => n === t)
                  ? o(r.response)
                  : e({
                      error: 'Your httpRequest failed with an error code of '.concat(
                        r.status
                      ),
                    }));
            } catch (n) {
              e({ error: 'Caught Exception: '.concat(n.description) });
            }
            let t;
          })),
          u.open(i, c),
          (u.responseType = 'json'),
          f
            ? (u.setRequestHeader(
                'Content-type',
                'application/json; charset=utf-8'
              ),
              u.send(JSON.stringify(f)))
            : u.send();
      }));
    };

    
const e = Object.freeze({
      getJson(n) {
        return r('GET', n, !1);
      },
      postJson(n, t) {
        return r('POST', n, t);
      },
    });
  return { ...e};
})();
