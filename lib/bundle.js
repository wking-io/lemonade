const lemonade = (function() {
  
  function t(t) {
    return (
      t != null && typeof t === 'object' && !0 === t['@@functional/placeholder']
    );
  }
  function n(n) {
    return function e(r) {
      return arguments.length === 0 || t(r) ? e : n.apply(this, arguments);
    };
  }
  function e(e) {
    return function r(i, o) {
      switch (arguments.length) {
        case 0:
          return r;
        case 1:
          return t(i)
            ? r
            : n((t) => e(i, t));
        default:
          return t(i) && t(o)
            ? r
            : t(i)
              ? n((t) => e(t, o))
              : t(o)
                ? n((t) => e(i, t))
                : e(i, o);
      }
    };
  }
  function r(t, n) {
    switch (t) {
      case 0:
        return function() {
          return n.apply(this, arguments);
        };
      case 1:
        return function(t) {
          return n.apply(this, arguments);
        };
      case 2:
        return function(t, e) {
          return n.apply(this, arguments);
        };
      case 3:
        return function(t, e, r) {
          return n.apply(this, arguments);
        };
      case 4:
        return function(t, e, r, i) {
          return n.apply(this, arguments);
        };
      case 5:
        return function(t, e, r, i, o) {
          return n.apply(this, arguments);
        };
      case 6:
        return function(t, e, r, i, o, u) {
          return n.apply(this, arguments);
        };
      case 7:
        return function(t, e, r, i, o, u, a) {
          return n.apply(this, arguments);
        };
      case 8:
        return function(t, e, r, i, o, u, a, s) {
          return n.apply(this, arguments);
        };
      case 9:
        return function(t, e, r, i, o, u, a, s, c) {
          return n.apply(this, arguments);
        };
      case 10:
        return function(t, e, r, i, o, u, a, s, c, f) {
          return n.apply(this, arguments);
        };
      default:
        throw new Error(
          'First argument to _arity must be a non-negative integer no greater than ten'
        );
    }
  }
  function i(n, e, o) {
    return function() {
      for (
        var u = [], a = 0, s = n, c = 0;
        c < e.length || a < arguments.length;

      ) {
        var f;
        c < e.length && (!t(e[c]) || a >= arguments.length)
          ? (f = e[c])
          : ((f = arguments[a]), (a += 1)),
          (u[c] = f),
          t(f) || (s -= 1),
          (c += 1);
      }
      return s <= 0 ? o.apply(this, u) : r(s, i(n, u, o));
    };
  }
  const o = e((t, e) => t === 1 ? n(e) : r(t, i(t, [], e)));
  Array.isArray;
  typeof Symbol !== 'undefined' && Symbol.iterator;
  function u(t, n) {
    return Object.prototype.hasOwnProperty.call(n, t);
  }
  let a = Object.prototype.toString,
    s = !{ toString: null }.propertyIsEnumerable('toString'),
    c = [
      'constructor',
      'valueOf',
      'isPrototypeOf',
      'toString',
      'propertyIsEnumerable',
      'hasOwnProperty',
      'toLocaleString',
    ],
    f = (function() {
      return arguments.propertyIsEnumerable('length');
    })(),
    h = function(t, n) {
      for (let e = 0; e < t.length; ) {
        if (t[e] === n) return !0;
        e += 1;
      }
      return !1;
    };
  Object.keys;
  const p = n((t) => o(t.length, t));
  const l = function(t) {
    return (t < 10 ? '0' : '') + t;
  };
  Date.prototype.toISOString;
  let y = '\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff',
    _ = (String.prototype.trim,
    typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
        ? global
        : typeof self !== 'undefined' ? self : {});
  function d(t, n) {
    return t((n = { exports: {} }), n.exports), n.exports;
  }
  let v = d((t) => {
      let n;
      t.exports = ((n = '@@type'),
      function(t) {
        return t != null &&
          t.constructor != null &&
          t.constructor.prototype !== t &&
          typeof t.constructor[n] === 'string'
          ? t.constructor[n]
          : Object.prototype.toString
              .call(t)
              .slice('[object '.length, -']'.length);
      });
    }),
    m = d((t) => {
      t.exports = (function(t) {
        if (typeof __doctest !== 'undefined') {
          __doctest.require('./test/Identity');
          let n = __doctest.require('./test/List'),
            e = __doctest.require('./test/Maybe');
          __doctest.require('./test/Sum'),
            __doctest.require('./test/Tuple'),
            n.Nil,
            n.Cons,
            e.Nothing,
            e.Just;
        }
        function r(t) {
          return function(n) {
            return t.concat(n);
          };
        }
        function i(t) {
          return function(n) {
            return t;
          };
        }
        function o(t, n) {
          Object.keys(t).forEach(n, t);
        }
        function u(t, n) {
          return Object.prototype.hasOwnProperty.call(n, t);
        }
        function a(t) {
          return t;
        }
        function s(t) {
          return function(n) {
            return [t, n];
          };
        }
        function c(n, e) {
          return typeof n === typeof e && t(n) === t(e);
        }
        function f(t) {
          return { value: t, done: !1 };
        }
        function h(t) {
          return { value: t, done: !0 };
        }
        function p(t, n, e, r) {
          if (!(this instanceof p)) return new p(t, n, e, r);
          (this.name = t),
            (this.url = n),
            (this.test = function(t) {
              return (
                e.every((n) => n.test(t)) && r(t)
              );
            });
        }
        p['@@type'] = 'sanctuary-type-classes/TypeClass';
        let l = 'Constructor',
          y = 'Value';
        function _(t, n, e) {
          for (var r = e, i = 0; i < n.length; i += 1) {
            const o = n[i];
            if (r == null || (!t && !u(o, r))) return null;
            r = r[o];
          }
          return typeof r === 'function' ? r : null;
        }
        function d(t, n) {
          return _(!0, t, n);
        }
        function v(t) {
          return _(!1, t, $);
        }
        const m = u('name', () => {})
          ? function(t) {
              return t.name;
            }
          : function(t) {
              const n = /function (\w*)/.exec(t);
              return n == null ? '' : n[1];
            };
        function g(n, e, r) {
          function i(n) {
            const e = `fantasy-land/${  n}`;
            return r[n] === l
              ? function(t) {
                  const n = d([e], t);
                  return n == null && typeof t === 'function' ? v([m(t), e]) : n;
                }
              : function(n) {
                  let r =
                      n != null &&
                      n.constructor != null &&
                      n.constructor.prototype === n,
                    i = null;
                  return (
                    r || (i = d([e], n)),
                    i == null && (i = v([t(n), 'prototype', e])),
                    i && i.bind(n)
                  );
                };
          }
          let o = Object.keys(r),
            u = p(
              `sanctuary-type-classes/${  n}`,
              `https://github.com/sanctuary-js/sanctuary-type-classes/tree/v8.0.1#${ 
                n}`,
              e,
              (t) => o.every((n) => {
                  const e = r[n] === l ? t.constructor : t;
                  return i(n)(e) != null;
                })
            );
          return (
            (u.methods = o.reduce((t, n) => (t[n] = i(n)), t, {})),
            u
          );
        }
        let b = g('Setoid', [], { equals: y }),
          F = g('Ord', [b], { lte: y }),
          w = g('Semigroupoid', [], { compose: y }),
          j = g('Category', [w], { id: l }),
          k = g('Semigroup', [], { concat: y }),
          O = g('Monoid', [k], { empty: l }),
          S = g('Group', [O], { invert: y }),
          A = g('Filterable', [], { filter: y }),
          x = g('Functor', [], { map: y }),
          R = g('Bifunctor', [x], { bimap: y }),
          q = g('Profunctor', [x], { promap: y }),
          M = g('Apply', [x], { ap: y }),
          P = g('Applicative', [M], { of: l }),
          N = g('Chain', [M], { chain: y }),
          T = g('ChainRec', [N], { chainRec: l }),
          z = g('Monad', [P, N], {}),
          C = g('Alt', [x], { alt: y }),
          E = g('Plus', [C], { zero: l }),
          W = g('Alternative', [P, E], {}),
          B = g('Foldable', [], { reduce: y }),
          L = g('Traversable', [x, B], { traverse: y }),
          I = g('Extend', [x], { extend: y }),
          Q = g('Comonad', [I], { extract: y }),
          J = g('Contravariant', [], { contramap: y });
        function G(t) {
          return [t];
        }
        function D(t) {
          if (t.length !== this.length) return !1;
          for (let n = 0; n < this.length; n += 1)
            if (!K(this[n], t[n])) return !1;
          return !0;
        }
        function H(t) {
          for (let n = 0; ; n += 1) {
            if (n === this.length) return !0;
            if (n === t.length) return !1;
            if (!K(this[n], t[n])) return tt(this[n], t[n]);
          }
        }
        function U(t) {
          return this.concat(t);
        }
        function X(t) {
          const n = {};
          function e(t) {
            n[t] = this[t];
          }
          return o(this, e), o(t, e), n;
        }
        var Y,
          $ = {
            Null: {
              prototype: {
                toString() {
                  return 'null';
                },
                'fantasy-land/equals'(t) {
                  return !0;
                },
                'fantasy-land/lte'(t) {
                  return !0;
                },
              },
            },
            Undefined: {
              prototype: {
                toString() {
                  return 'undefined';
                },
                'fantasy-land/equals'(t) {
                  return !0;
                },
                'fantasy-land/lte'(t) {
                  return !0;
                },
              },
            },
            Boolean: {
              prototype: {
                toString() {
                  return typeof this === 'object'
                    ? `new Boolean(${  V(this.valueOf())  })`
                    : this.toString();
                },
                'fantasy-land/equals'(t) {
                  return typeof this === 'object'
                    ? K(this.valueOf(), t.valueOf())
                    : this === t;
                },
                'fantasy-land/lte'(t) {
                  return typeof this === 'object'
                    ? tt(this.valueOf(), t.valueOf())
                    : !1 === this || !0 === t;
                },
              },
            },
            Number: {
              prototype: {
                toString() {
                  return typeof this === 'object'
                    ? `new Number(${  V(this.valueOf())  })`
                    : 1 / this == -1 / 0 ? '-0' : this.toString(10);
                },
                'fantasy-land/equals'(t) {
                  return typeof this === 'object'
                    ? K(this.valueOf(), t.valueOf())
                    : (isNaN(this) && isNaN(t)) || this === t;
                },
                'fantasy-land/lte'(t) {
                  return typeof this === 'object'
                    ? tt(this.valueOf(), t.valueOf())
                    : (isNaN(this) && isNaN(t)) || this <= t;
                },
              },
            },
            Date: {
              prototype: {
                toString() {
                  const t = isNaN(this.valueOf()) ? NaN : this.toISOString();
                  return `new Date(${  V(t)  })`;
                },
                'fantasy-land/equals'(t) {
                  return K(this.valueOf(), t.valueOf());
                },
                'fantasy-land/lte'(t) {
                  return tt(this.valueOf(), t.valueOf());
                },
              },
            },
            RegExp: {
              prototype: {
                'fantasy-land/equals'(t) {
                  return (
                    t.source === this.source &&
                    t.global === this.global &&
                    t.ignoreCase === this.ignoreCase &&
                    t.multiline === this.multiline &&
                    t.sticky === this.sticky &&
                    t.unicode === this.unicode
                  );
                },
              },
            },
            String: {
              'fantasy-land/empty'() {
                return '';
              },
              prototype: {
                toString() {
                  return typeof this === 'object'
                    ? `new String(${  V(this.valueOf())  })`
                    : JSON.stringify(this);
                },
                'fantasy-land/equals'(t) {
                  return typeof this === 'object'
                    ? K(this.valueOf(), t.valueOf())
                    : this === t;
                },
                'fantasy-land/lte'(t) {
                  return typeof this === 'object'
                    ? tt(this.valueOf(), t.valueOf())
                    : this <= t;
                },
                'fantasy-land/concat'(t) {
                  return this + t;
                },
              },
            },
            Array: {
              'fantasy-land/empty'() {
                return [];
              },
              'fantasy-land/of': G,
              'fantasy-land/chainRec'(t, n) {
                for (var e = [n], r = []; e.length > 0; ) {
                  for (
                    var i = t(f, h, e.shift()), o = [], u = 0;
                    u < i.length;
                    u += 1
                  )
                    (i[u].done ? r : o).push(i[u].value);
                  Array.prototype.unshift.apply(e, o);
                }
                return r;
              },
              'fantasy-land/zero'() {
                return [];
              },
              prototype: {
                toString() {
                  for (
                    var t = this.map(V), n = Object.keys(this).sort(), e = 0;
                    e < n.length;
                    e += 1
                  ) {
                    const r = n[e];
                    /^\d+$/.test(r) || t.push(`${V(r)  }: ${  V(this[r])}`);
                  }
                  return `[${  t.join(', ')  }]`;
                },
                'fantasy-land/equals': D,
                'fantasy-land/lte': H,
                'fantasy-land/concat': U,
                'fantasy-land/filter'(t) {
                  return this.filter((n) => t(n));
                },
                'fantasy-land/map'(t) {
                  return this.map((n) => t(n));
                },
                'fantasy-land/ap'(t) {
                  for (var n = [], e = 0; e < t.length; e += 1)
                    for (let r = 0; r < this.length; r += 1)
                      n.push(t[e](this[r]));
                  return n;
                },
                'fantasy-land/chain'(t) {
                  const n = [];
                  return (
                    this.forEach((e) => {
                      Array.prototype.push.apply(n, t(e));
                    }),
                    n
                  );
                },
                'fantasy-land/alt': U,
                'fantasy-land/reduce'(t, n) {
                  return this.reduce((n, e) => t(n, e), n);
                },
                'fantasy-land/traverse'(t, n) {
                  const e = this;
                  function i(o, u) {
                    switch (u) {
                      case 0:
                        return at(t, []);
                      case 2:
                        return ut(s, n(e[o]), n(e[o + 1]));
                      default:
                        var a = 2 * Math.floor(u / 4);
                        return ut(r, i(o, a), i(o + a, u - a));
                    }
                  }
                  return this.length % 2 == 1
                    ? ut(r, it(G, n(this[0])), i(1, this.length - 1))
                    : i(0, this.length);
                },
                'fantasy-land/extend'(t) {
                  return this.map((n, e, r) => t(r.slice(e)));
                },
              },
            },
            Arguments: {
              prototype: {
                toString() {
                  return (
                    `(function () { return arguments; }(${ 
                    Array.prototype.map.call(this, V).join(', ') 
                    }))`
                  );
                },
                'fantasy-land/equals'(t) {
                  return D.call(this, t);
                },
                'fantasy-land/lte'(t) {
                  return H.call(this, t);
                },
              },
            },
            Error: {
              prototype: {
                toString() {
                  return `new ${  this.name  }(${  V(this.message)  })`;
                },
                'fantasy-land/equals'(t) {
                  return K(this.name, t.name) && K(this.message, t.message);
                },
              },
            },
            Object: {
              'fantasy-land/empty'() {
                return {};
              },
              'fantasy-land/zero'() {
                return {};
              },
              prototype: {
                toString() {
                  for (
                    var t = [], n = Object.keys(this).sort(), e = 0;
                    e < n.length;
                    e += 1
                  ) {
                    const r = n[e];
                    t.push(`${V(r)  }: ${  V(this[r])}`);
                  }
                  return `{${  t.join(', ')  }}`;
                },
                'fantasy-land/equals'(t) {
                  let n = this,
                    e = Object.keys(this).sort();
                  return (
                    K(e, Object.keys(t).sort()) &&
                    e.every((e) => K(n[e], t[e]))
                  );
                },
                'fantasy-land/lte'(t) {
                  for (
                    let n = Object.keys(this).sort(), e = Object.keys(t).sort();
                    ;

                  ) {
                    if (n.length === 0) return !0;
                    if (e.length === 0) return !1;
                    let r = n.shift(),
                      i = e.shift();
                    if (r < i) return !0;
                    if (r > i) return !1;
                    if (!K(this[r], t[r])) return tt(this[r], t[r]);
                  }
                },
                'fantasy-land/concat': X,
                'fantasy-land/filter'(t) {
                  const n = {};
                  return (
                    o(this, function(e) {
                      t(this[e]) && (n[e] = this[e]);
                    }),
                    n
                  );
                },
                'fantasy-land/map'(t) {
                  const n = {};
                  return (
                    o(this, function(e) {
                      n[e] = t(this[e]);
                    }),
                    n
                  );
                },
                'fantasy-land/ap'(t) {
                  const n = {};
                  return (
                    o(this, function(e) {
                      u(e, t) && (n[e] = t[e](this[e]));
                    }),
                    n
                  );
                },
                'fantasy-land/alt': X,
                'fantasy-land/reduce'(t, n) {
                  const e = this;
                  return Object.keys(this)
                    .sort()
                    .reduce((n, r) => t(n, e[r]), n);
                },
                'fantasy-land/traverse'(t, n) {
                  const e = this;
                  return Object.keys(this).reduce((t, r) => ut(
                      (t) => function(n) {
                          const e = {};
                          return (e[r] = n), X.call(t, e);
                        },
                      t,
                      n(e[r])
                    ), at(t, {}));
                },
              },
            },
            Function: {
              'fantasy-land/id'() {
                return a;
              },
              'fantasy-land/of'(t) {
                return function(n) {
                  return t;
                };
              },
              'fantasy-land/chainRec'(t, n) {
                return function(e) {
                  for (var r = f(n); !r.done; ) r = t(f, h, r.value)(e);
                  return r.value;
                };
              },
              prototype: {
                'fantasy-land/equals'(t) {
                  return t === this;
                },
                'fantasy-land/compose'(t) {
                  const n = this;
                  return function(e) {
                    return t(n(e));
                  };
                },
                'fantasy-land/map'(t) {
                  const n = this;
                  return function(e) {
                    return t(n(e));
                  };
                },
                'fantasy-land/promap'(t, n) {
                  const e = this;
                  return function(r) {
                    return n(e(t(r)));
                  };
                },
                'fantasy-land/ap'(t) {
                  const n = this;
                  return function(e) {
                    return t(e)(n(e));
                  };
                },
                'fantasy-land/chain'(t) {
                  const n = this;
                  return function(e) {
                    return t(n(e))(e);
                  };
                },
                'fantasy-land/extend'(t) {
                  const n = this;
                  return function(e) {
                    return t((t) => n(nt(e, t)));
                  };
                },
                'fantasy-land/contramap'(t) {
                  const n = this;
                  return function(e) {
                    return n(t(e));
                  };
                },
              },
            },
          },
          V = (function() {
            const n = [];
            function e(t, e) {
              n.push(e);
              try {
                return t.call(e);
              } finally {
                n.pop();
              }
            }
            return function(r) {
              if (n.indexOf(r) >= 0) return '<Circular>';
              const i = t(r);
              if (i === 'Object') {
                let o;
                try {
                  o = e(r.toString, r);
                } catch (t) {}
                if (o != null && o !== '[object Object]') return o;
              }
              return e(v([i, 'prototype', 'toString']) || r.toString, r);
            };
          })(),
          K = ((Y = []),
          function(t, n) {
            if (!c(t, n)) return !1;
            if (
              Y.some((e) => e[0] === t && e[1] === n)
            )
              return !0;
            Y.push([t, n]);
            try {
              return b.test(t) && b.test(n) && b.methods.equals(t)(n);
            } finally {
              Y.pop();
            }
          });
        function Z(t, n) {
          return c(t, n) && !tt(n, t);
        }
        var tt = (function() {
          const t = [];
          return function(n, e) {
            if (!c(n, e)) return !1;
            if (
              t.some((t) => t[0] === n && t[1] === e)
            )
              return K(n, e);
            t.push([n, e]);
            try {
              return F.test(n) && F.test(e) && F.methods.lte(n)(e);
            } finally {
              t.pop();
            }
          };
        })();
        function nt(t, n) {
          return k.methods.concat(t)(n);
        }
        function et(t) {
          return O.methods.empty(t)();
        }
        function rt(t, n) {
          return A.methods.filter(n)(t);
        }
        function it(t, n) {
          return x.methods.map(n)(t);
        }
        function ot(t, n) {
          return M.methods.ap(n)(t);
        }
        function ut(t, n, e) {
          return ot(it(t, n), e);
        }
        function at(t, n) {
          return P.methods.of(t)(n);
        }
        function st(t, n) {
          return N.methods.chain(n)(t);
        }
        function ct(t, n, e) {
          return B.methods.reduce(e)(t, n);
        }
        function ft(t, n) {
          for (
            var e = ct(
                (n, e) => {
                  for (var r = t(e), i = 0, o = n.length; i < o; ) {
                    const u = Math.floor((i + o) / 2);
                    tt(n[u].fx, r) ? (i = u + 1) : (o = u);
                  }
                  return n.splice(i, 0, { x: e, fx: r }), n;
                },
                [],
                n
              ),
              r = n.constructor,
              i = et(r),
              o = 0;
            o < e.length;
            o += 1
          )
            i = nt(i, at(r, e[o].x));
          return i;
        }
        function ht(t, n, e) {
          return L.methods.traverse(e)(t, n);
        }
        function pt(t, n) {
          return I.methods.extend(n)(t);
        }
        return {
          TypeClass: p,
          Setoid: b,
          Ord: F,
          Semigroupoid: w,
          Category: j,
          Semigroup: k,
          Monoid: O,
          Group: S,
          Filterable: A,
          Functor: x,
          Bifunctor: R,
          Profunctor: q,
          Apply: M,
          Applicative: P,
          Chain: N,
          ChainRec: T,
          Monad: z,
          Alt: C,
          Plus: E,
          Alternative: W,
          Foldable: B,
          Traversable: L,
          Extend: I,
          Comonad: Q,
          Contravariant: J,
          toString: V,
          equals: K,
          lt: Z,
          lte: tt,
          gt(t, n) {
            return Z(n, t);
          },
          gte(t, n) {
            return tt(n, t);
          },
          min(t, n) {
            return tt(t, n) ? t : n;
          },
          max(t, n) {
            return tt(t, n) ? n : t;
          },
          compose(t, n) {
            return w.methods.compose(n)(t);
          },
          id(t) {
            return j.methods.id(t)();
          },
          concat: nt,
          empty: et,
          invert(t) {
            return S.methods.invert(t)();
          },
          filter: rt,
          reject(t, n) {
            return rt((n) => !t(n), n);
          },
          map: it,
          bimap(t, n, e) {
            return R.methods.bimap(e)(t, n);
          },
          promap(t, n, e) {
            return q.methods.promap(e)(t, n);
          },
          ap: ot,
          lift2: ut,
          lift3(t, n, e, r) {
            return ot(ot(it(t, n), e), r);
          },
          apFirst(t, n) {
            return ut(i, t, n);
          },
          apSecond(t, n) {
            return ut(i(a), t, n);
          },
          of: at,
          append(t, n) {
            return nt(n, at(n.constructor, t));
          },
          prepend(t, n) {
            return nt(at(n.constructor, t), n);
          },
          chain: st,
          join(t) {
            return st(a, t);
          },
          chainRec(t, n, e) {
            return T.methods.chainRec(t)(n, e);
          },
          alt(t, n) {
            return C.methods.alt(t)(n);
          },
          zero(t) {
            return E.methods.zero(t)();
          },
          reduce: ct,
          size(t) {
            return Array.isArray(t)
              ? t.length
              : ct(
                  (t, n) => t + 1,
                  0,
                  t
                );
          },
          elem(t, n) {
            return ct(
              (n, e) => n || K(t, e),
              !1,
              n
            );
          },
          reverse(t) {
            if (Array.isArray(t)) return t.slice().reverse();
            const n = t.constructor;
            return ct(
              (t, e) => nt(at(n, e), t),
              et(n),
              t
            );
          },
          sort(t) {
            return ft(a, t);
          },
          sortBy: ft,
          takeWhile(t, n) {
            let e = !0;
            return rt((n) => (e = e && t(n)), n);
          },
          dropWhile(t, n) {
            let e = !1;
            return rt((n) => (e = e || !t(n)), n);
          },
          traverse: ht,
          sequence(t, n) {
            return ht(t, a, n);
          },
          extend: pt,
          duplicate(t) {
            return pt(a, t);
          },
          extract(t) {
            return Q.methods.extract(t)();
          },
          contramap(t, n) {
            return J.methods.contramap(n)(t);
          },
        };
      })(v);
    }),
    g = d((t) => {
      t.exports = (function() {
        let e = /\t/g,
          n = /\s*[^\s]/,
          r = /\n\r?/,
          t = /^ */;
        function i(t) {
          return n.test(t);
        }
        function o(n) {
          return n.match(t)[0].length;
        }
        function u(t) {
          return new Array(t + 1).join(' ');
        }
        function a(t, n) {
          let r = (function(t) {
              let n = t.filter(i).map(o),
                e = n.reduce(Math.min, 1 / 0),
                r =
                  n
                    .map((t) => t - e)
                    .find((t) => t > 1) || 2;
              return { depth: e, tabsize: r };
            })(t.slice(1)),
            a = new RegExp(u(r.tabsize), 'g');
          return t
            .map((t) => t
                .slice(Math.min(r.depth, o(t)))
                .replace(a, '\t')
                .replace(e, n))
            .join('\n');
        }
        return function t(n, i) {
          if (
            ((function(t) {
              if (typeof t !== 'number')
                throw new TypeError(
                  'inspectf expects its first argument to be a number'
                );
            })(n),
            arguments.length < 2)
          )
            return function(e) {
              return t(n, e);
            };
          if (
            ((function(t) {
              if (typeof t !== 'function')
                throw new TypeError(
                  'inspectf expects its second argument to be a function'
                );
            })(i),
            i.toString !== Function.prototype.toString)
          )
            return i.toString();
          let o = u(n),
            s = (function(t, n) {
              return t.toString().replace(e, n);
            })(i, o),
            c = s.split(r);
          return c.length < 2 ? s : a(c, o);
        };
      })();
    }),
    b = d((t) => {
      t.exports = (function() {
        let t = '@@type',
          n = new RegExp('^([\\s\\S]+)/([\\s\\S]+?)(?:@([0-9]+))?$');
        function e(n) {
          return n != null &&
            n.constructor != null &&
            n.constructor.prototype !== n &&
            typeof n.constructor[t] === 'string'
            ? n.constructor[t]
            : Object.prototype.toString
                .call(n)
                .slice('[object '.length, -']'.length);
        }
        return (
          (e.parse = function(t) {
            const e = n.exec(t);
            return {
              namespace: e == null || e[1] == null ? null : e[1],
              name: e == null ? t : e[2],
              version: e == null || e[3] == null ? 0 : Number(e[3]),
            };
          }),
          e
        );
      })();
    }),
    F = d((t) => {
      t.exports = (function(t, n) {
        let e = '@@type',
          r = ['first', 'second', 'third', 'fourth', 'fifth'];
        function i(t) {
          return typeof t === 'function';
        }
        function o(t) {
          return t.length >= 2;
        }
        function u(n, e, i, o) {
          throw new TypeError(
            `${n 
              } expects its ${ 
              r[e] 
              } argument to ${ 
              i 
              }\n  Actual: ${ 
              t.toString(o)}`
          );
        }
        function a(n, e, r) {
          throw new TypeError(
            `${n 
              } was invoked outside the context of a ${ 
              r 
              }. \n  Called on: ${ 
              t.toString(e)}`
          );
        }
        return function(r, s, c, f) {
          let h,
            p,
            l = (function(t) {
              return t[e] || t.name || 'Anonymous';
            })(r),
            y = ((h = l),
            `${(p = n.parse(h)).namespace || 'concurrify' 
              }/Concurrent${ 
              p.name 
              }@${ 
              p.version}`),
            _ = n.parse(l).name,
            d = n.parse(y).name;
          function v(t) {
            this.sequential = t;
          }
          function m(t) {
            return (
              t instanceof r ||
              (Boolean(t) && t.constructor === r) ||
              n(t) === r[e]
            );
          }
          function g(t) {
            return (
              t instanceof v ||
              (Boolean(t) && t.constructor === v) ||
              n(t) === y
            );
          }
          function b(t) {
            return m(t) || u(d, 0, `be of type "${  _  }"`, t), new v(t);
          }
          (function(n) {
            try {
              return t.Applicative.test(t.of(n));
            } catch (t) {
              return !1;
            }
          })(r) || u('concurrify', 0, 'represent an Applicative', r),
            m(s) || u('concurrify', 1, `be of type "${  _  }"`, s),
            i(c) || u('concurrify', 2, 'be a function', c),
            o(c) || u('concurrify', 2, 'be binary', c),
            i(f) || u('concurrify', 3, 'be a function', f),
            o(f) || u('concurrify', 3, 'be binary', f);
          const F = (v.prototype = b.prototype = { constructor: b });
          b[e] = y;
          const w = new v(s);
          return (
            (b['fantasy-land/zero'] = function() {
              return w;
            }),
            (b['fantasy-land/of'] = function(n) {
              return new v(t.of(r, n));
            }),
            (F['fantasy-land/map'] = function(n) {
              return (
                g(this) || a(`${d  }#map`, this, d),
                i(n) || u(`${d  }#map`, 0, 'be a function', n),
                new v(t.map(n, this.sequential))
              );
            }),
            (F['fantasy-land/ap'] = function(t) {
              return (
                g(this) || a(`${d  }#ap`, this, d),
                g(t) || u(`${d  }#ap`, 0, `be a ${  d}`, t),
                new v(f(this.sequential, t.sequential))
              );
            }),
            (F['fantasy-land/alt'] = function(t) {
              return (
                g(this) || a(`${d  }#alt`, this, d),
                g(t) || u(`${d  }#alt`, 0, `be a ${  d}`, t),
                new v(c(this.sequential, t.sequential))
              );
            }),
            (F.toString = function() {
              return (
                g(this) || a(`${d  }#toString`, this, d),
                `${d  }(${  t.toString(this.sequential)  })`
              );
            }),
            b
          );
        };
      })(m, b);
    });
  function w(t) {
    (this._list = new Array(4)),
      (this._capacityMask = 3),
      (this._head = 0),
      (this._tail = 0),
      Array.isArray(t) && this._fromArray(t);
  }
  (w.prototype.peekAt = function(t) {
    let n = t;
    if (n === (0 | n)) {
      const e = this.size();
      if (!(n >= e || n < -e))
        return (
          n < 0 && (n += e),
          (n = (this._head + n) & this._capacityMask),
          this._list[n]
        );
    }
  }),
    (w.prototype.get = function(t) {
      return this.peekAt(t);
    }),
    (w.prototype.peek = function() {
      if (this._head !== this._tail) return this._list[this._head];
    }),
    (w.prototype.peekFront = function() {
      return this.peek();
    }),
    (w.prototype.peekBack = function() {
      return this.peekAt(-1);
    }),
    Object.defineProperty(w.prototype, 'length', {
      get() {
        return this.size();
      },
    }),
    (w.prototype.size = function() {
      return this._head === this._tail
        ? 0
        : this._head < this._tail
          ? this._tail - this._head
          : this._capacityMask + 1 - (this._head - this._tail);
    }),
    (w.prototype.unshift = function(t) {
      if (void 0 === t) return this.length;
      const n = this._list.length;
      return (
        (this._head = (this._head - 1 + n) & this._capacityMask),
        (this._list[this._head] = t),
        this._tail === this._head && this._growArray(),
        this._head < this._tail
          ? this._tail - this._head
          : this._capacityMask + 1 - (this._head - this._tail)
      );
    }),
    (w.prototype.shift = function() {
      const t = this._head;
      if (t !== this._tail) {
        const n = this._list[t];
        return (
          (this._list[t] = void 0),
          (this._head = (t + 1) & this._capacityMask),
          t < 2 &&
            this._tail > 1e4 &&
            this._tail <= this._list.length >>> 2 &&
            this._shrinkArray(),
          n
        );
      }
    }),
    (w.prototype.push = function(t) {
      if (void 0 === t) return this.length;
      const n = this._tail;
      return (
        (this._list[n] = t),
        (this._tail = (n + 1) & this._capacityMask),
        this._tail === this._head && this._growArray(),
        this._head < this._tail
          ? this._tail - this._head
          : this._capacityMask + 1 - (this._head - this._tail)
      );
    }),
    (w.prototype.pop = function() {
      const t = this._tail;
      if (t !== this._head) {
        const n = this._list.length;
        this._tail = (t - 1 + n) & this._capacityMask;
        const e = this._list[this._tail];
        return (
          (this._list[this._tail] = void 0),
          this._head < 2 && t > 1e4 && t <= n >>> 2 && this._shrinkArray(),
          e
        );
      }
    }),
    (w.prototype.removeOne = function(t) {
      let n = t;
      if (n === (0 | n) && this._head !== this._tail) {
        let e = this.size(),
          r = this._list.length;
        if (!(n >= e || n < -e)) {
          n < 0 && (n += e), (n = (this._head + n) & this._capacityMask);
          let i,
            o = this._list[n];
          if (t < e / 2) {
            for (i = t; i > 0; i--)
              this._list[n] = this._list[
                (n = (n - 1 + r) & this._capacityMask)
              ];
            (this._list[n] = void 0),
              (this._head = (this._head + 1 + r) & this._capacityMask);
          } else {
            for (i = e - 1 - t; i > 0; i--)
              this._list[n] = this._list[
                (n = (n + 1 + r) & this._capacityMask)
              ];
            (this._list[n] = void 0),
              (this._tail = (this._tail - 1 + r) & this._capacityMask);
          }
          return o;
        }
      }
    }),
    (w.prototype.remove = function(t, n) {
      let e,
        r = t,
        i = n;
      if (r === (0 | r) && this._head !== this._tail) {
        let o = this.size(),
          u = this._list.length;
        if (!(r >= o || r < -o || n < 1)) {
          if ((r < 0 && (r += o), n === 1 || !n))
            return ((e = new Array(1))[0] = this.removeOne(r)), e;
          if (r === 0 && r + n >= o)
            return (e = this.toArray()), this.clear(), e;
          let a;
          for (r + n > o && (n = o - r), e = new Array(n), a = 0; a < n; a++)
            e[a] = this._list[(this._head + r + a) & this._capacityMask];
          if (((r = (this._head + r) & this._capacityMask), t + n === o)) {
            for (
              this._tail = (this._tail - n + u) & this._capacityMask, a = n;
              a > 0;
              a--
            )
              this._list[(r = (r + 1 + u) & this._capacityMask)] = void 0;
            return e;
          }
          if (t === 0) {
            for (
              this._head = (this._head + n + u) & this._capacityMask, a = n - 1;
              a > 0;
              a--
            )
              this._list[(r = (r + 1 + u) & this._capacityMask)] = void 0;
            return e;
          }
          if (t < o / 2) {
            for (
              this._head = (this._head + t + n + u) & this._capacityMask, a = t;
              a > 0;
              a--
            )
              this.unshift(this._list[(r = (r - 1 + u) & this._capacityMask)]);
            for (r = (this._head - 1 + u) & this._capacityMask; i > 0; )
              (this._list[(r = (r - 1 + u) & this._capacityMask)] = void 0),
                i--;
          } else {
            for (
              this._tail = r,
                r = (r + n + u) & this._capacityMask,
                a = o - (n + t);
              a > 0;
              a--
            )
              this.push(this._list[r++]);
            for (r = this._tail; i > 0; )
              (this._list[(r = (r + 1 + u) & this._capacityMask)] = void 0),
                i--;
          }
          return (
            this._head < 2 &&
              this._tail > 1e4 &&
              this._tail <= u >>> 2 &&
              this._shrinkArray(),
            e
          );
        }
      }
    }),
    (w.prototype.splice = function(t, n) {
      let e = t,
        r = this.size();
      if (
        e === (0 | e) &&
        this._head !== this._tail &&
        !(e > r || e < -r || (e === r && n != 0))
      ) {
        if ((e < 0 && (e += r), arguments.length > 2)) {
          let i,
            o,
            u,
            a = arguments.length,
            s = this._list.length,
            c = 2;
          if (e < r / 2) {
            for (o = new Array(e), i = 0; i < e; i++)
              o[i] = this._list[(this._head + i) & this._capacityMask];
            for (
              n === 0
                ? ((u = []),
                  e > 0 &&
                    (this._head = (this._head + e + s) & this._capacityMask))
                : ((u = this.remove(e, n)),
                  (this._head = (this._head + e + s) & this._capacityMask));
              a > c;

            )
              this.unshift(arguments[--a]);
            for (i = e; i > 0; i--) this.unshift(o[i - 1]);
          } else {
            const f = (o = new Array(r - (e + n))).length;
            for (i = 0; i < f; i++)
              o[i] = this._list[(this._head + e + n + i) & this._capacityMask];
            for (
              n === 0
                ? ((u = []),
                  e != r &&
                    (this._tail = (this._head + e + s) & this._capacityMask))
                : ((u = this.remove(e, n)),
                  (this._tail = (this._tail - f + s) & this._capacityMask));
              c < a;

            )
              this.push(arguments[c++]);
            for (i = 0; i < f; i++) this.push(o[i]);
          }
          return u;
        }
        return this.remove(e, n);
      }
    }),
    (w.prototype.clear = function() {
      (this._head = 0), (this._tail = 0);
    }),
    (w.prototype.isEmpty = function() {
      return this._head === this._tail;
    }),
    (w.prototype.toArray = function() {
      return this._copyArray(!1);
    }),
    (w.prototype._fromArray = function(t) {
      for (let n = 0; n < t.length; n++) this.push(t[n]);
    }),
    (w.prototype._copyArray = function(t) {
      let n,
        e = [],
        r = this._list,
        i = r.length;
      if (t || this._head > this._tail) {
        for (n = this._head; n < i; n++) e.push(r[n]);
        for (n = 0; n < this._tail; n++) e.push(r[n]);
      } else for (n = this._head; n < this._tail; n++) e.push(r[n]);
      return e;
    }),
    (w.prototype._growArray = function() {
      this._head && ((this._list = this._copyArray(!0)), (this._head = 0)),
        (this._tail = this._list.length),
        (this._list.length *= 2),
        (this._capacityMask = (this._capacityMask << 1) | 1);
    }),
    (w.prototype._shrinkArray = function() {
      (this._list.length >>>= 1), (this._capacityMask >>>= 1);
    });
  let j = w,
    k = d((t, n) => {
      t.exports = (function(t, n, e, r, i) {
        (t = t && t.hasOwnProperty('default') ? t.default : t),
          (n = n && n.hasOwnProperty('default') ? n.default : n),
          (e = e && e.hasOwnProperty('default') ? e.default : e),
          (r = r && r.hasOwnProperty('default') ? r.default : r),
          (i = i && i.hasOwnProperty('default') ? i.default : i);
        const o =
            typeof self === 'object'
              ? self
              : typeof _ === 'object'
                ? _
                : typeof window === 'object' ? window : {},
          u =
            typeof o.setImmediate === 'function'
              ? o.setImmediate
              : function(t, n) {
                  return setTimeout(t, 0, n);
                };
        function a() {}
        function s() {
          return this;
        }
        const c = t.toString;
        function f(t) {
          return (
            (e = '  '),
            n(2, t)
              .replace(/^/gm, e)
              .replace(e, '')
          );
          let e;
        }
        function h(t, n) {
          return function(e, r, i) {
            switch (arguments.length) {
              case 1:
                return t(n, e);
              case 2:
                return t(n, e, r);
              default:
                return t(n, e, r, i);
            }
          };
        }
        function p(t, n, e) {
          return function(r, i) {
            return arguments.length === 1 ? t(n, e, r) : t(n, e, r, i);
          };
        }
        function l(t, n, e, r) {
          return function(i) {
            return t(n, e, r, i);
          };
        }
        function y(t) {
          return function(n) {
            return u(t, n);
          };
        }
        let d = {
            map: 'fantasy-land/map',
            bimap: 'fantasy-land/bimap',
            chain: 'fantasy-land/chain',
            chainRec: 'fantasy-land/chainRec',
            ap: 'fantasy-land/ap',
            of: 'fantasy-land/of',
            zero: 'fantasy-land/zero',
          },
          v = ['first', 'second', 'third', 'fourth', 'fifth'],
          m = 'fluture',
          g = 'Future',
          b = 3,
          F = `${m  }/${  g  }@${  b}`;
        function w(t) {
          throw new Error(t);
        }
        function j(t) {
          throw new TypeError(t);
        }
        function k(t, n, e, r) {
          j(
            `${t 
              } expects its ${ 
              v[n] 
              } argument to ${ 
              e 
              }\n  Actual: ${ 
              c(r)}`
          );
        }
        function O(t, n) {
          j(
            `${t 
              } was invoked outside the context of a Future. You might want to use a dispatcher instead\n  Called on: ${ 
              c(n)}`
          );
        }
        function S(t, n, r, i) {
          let o,
            u = e.parse(e(r)),
            a =
              u.name === g
                ? `\n${ 
                  u.namespace !== m
                    ? ((o = u.namespace),
                      `The Future was not created by ${ 
                        m 
                        }. Make sure you transform other Futures to ${ 
                        m 
                        } Futures. Got ${ 
                        o ? `a Future from ${  o}` : 'an unscoped Future' 
                        }.\n  See: https://github.com/fluture-js/Fluture#casting-futures`)
                    : u.version !== b
                      ? (function(t, n) {
                          return (
                            `The Future was created by ${ 
                            n < b ? 'an older' : 'a newer' 
                            } version of ${ 
                            m 
                            }. This means that one of the sources which creates Futures is outdated. Update this source, or transform its created Futures to be compatible.\n  See: https://github.com/fluture-js/Fluture#casting-futures`
                          );
                        })(0, u.version)
                      : 'Nothing seems wrong. Contact the Fluture maintainers.'}`
                : '';
          j(
            `${t 
              } expects ${ 
              v[n] ? `its ${  v[n]  } argument to be a valid Future` : n 
              }.${ 
              a 
              }\n  Actual: ${ 
              c(r) 
              } :: ${ 
              u.name 
              }${i || ''}`
          );
        }
        function A(t) {
          return typeof t === 'function';
        }
        function x(t) {
          return t instanceof Promise || (Boolean(t) && A(t.then));
        }
        function R(t) {
          return t === 1 / 0 || (typeof t === 'number' && t > 0 && t % 1 == 0);
        }
        function q(t) {
          return t !== null && typeof t === 'object';
        }
        const M = { isEmpty: !0, size: 0, head: null, tail: null };
        function P(t) {
          w(
            `Future#value was called on a rejected Future\n  Actual: Future.reject(${ 
              c(t) 
              })`
          );
        }
        function N(t) {
          return A(t) || k('Future', 0, 'be a Function', t), new C(t);
        }
        function T(t) {
          return t instanceof N || e(t) === F;
        }
        (N['@@type'] = F),
          (N.prototype[d.ap] = function(t) {
            return t._ap(this);
          }),
          (N.prototype[d.map] = function(t) {
            return this._map(t);
          }),
          (N.prototype[d.bimap] = function(t, n) {
            return this._bimap(t, n);
          }),
          (N.prototype[d.chain] = function(t) {
            return this._chain(t);
          }),
          (N.prototype.ap = function(t) {
            return (
              T(this) || O('Future#ap', this),
              T(t) || S('Future#ap', 0, t),
              this._ap(t)
            );
          }),
          (N.prototype.map = function(t) {
            return (
              T(this) || O('Future#map', this),
              A(t) || k('Future#map', 0, 'to be a Function', t),
              this._map(t)
            );
          }),
          (N.prototype.bimap = function(t, n) {
            return (
              T(this) || O('Future#bimap', this),
              A(t) || k('Future#bimap', 0, 'to be a Function', t),
              A(n) || k('Future#bimap', 1, 'to be a Function', n),
              this._bimap(t, n)
            );
          }),
          (N.prototype.chain = function(t) {
            return (
              T(this) || O('Future#chain', this),
              A(t) || k('Future#chain', 0, 'to be a Function', t),
              this._chain(t)
            );
          }),
          (N.prototype.mapRej = function(t) {
            return (
              T(this) || O('Future#mapRej', this),
              A(t) || k('Future#mapRej', 0, 'to be a Function', t),
              this._mapRej(t)
            );
          }),
          (N.prototype.chainRej = function(t) {
            return (
              T(this) || O('Future#chainRej', this),
              A(t) || k('Future#chainRej', 0, 'to be a Function', t),
              this._chainRej(t)
            );
          }),
          (N.prototype.race = function(t) {
            return (
              T(this) || O('Future#race', this),
              T(t) || S('Future#race', 0, t),
              this._race(t)
            );
          }),
          (N.prototype.both = function(t) {
            return (
              T(this) || O('Future#both', this),
              T(t) || S('Future#both', 0, t),
              this._both(t)
            );
          }),
          (N.prototype.and = function(t) {
            return (
              T(this) || O('Future#and', this),
              T(t) || S('Future#and', 0, t),
              this._and(t)
            );
          }),
          (N.prototype.or = function(t) {
            return (
              T(this) || O('Future#or', this),
              T(t) || S('Future#or', 0, t),
              this._or(t)
            );
          }),
          (N.prototype.swap = function() {
            return T(this) || O('Future#ap', this), this._swap();
          }),
          (N.prototype.fold = function(t, n) {
            return (
              T(this) || O('Future#ap', this),
              A(t) || k('Future#fold', 0, 'to be a Function', t),
              A(n) || k('Future#fold', 1, 'to be a Function', n),
              this._fold(t, n)
            );
          }),
          (N.prototype.finally = function(t) {
            return (
              T(this) || O('Future#finally', this),
              T(t) || S('Future#finally', 0, t),
              this._finally(t)
            );
          }),
          (N.prototype.lastly = function(t) {
            return (
              T(this) || O('Future#lastly', this),
              T(t) || S('Future#lastly', 0, t),
              this._finally(t)
            );
          }),
          (N.prototype.fork = function(t, n) {
            return (
              T(this) || O('Future#fork', this),
              A(t) || k('Future#fork', 0, 'to be a Function', t),
              A(n) || k('Future#fork', 0, 'to be a Function', n),
              this._fork(t, n)
            );
          }),
          (N.prototype.value = function(t) {
            return (
              T(this) || O('Future#value', this),
              A(t) || k('Future#value', 0, 'to be a Function', t),
              this._fork(P, t)
            );
          }),
          (N.prototype.done = function(t) {
            return (
              T(this) || O('Future#done', this),
              A(t) || k('Future#done', 0, 'to be a Function', t),
              this._fork(
                (n) => {
                  t(n);
                },
                (n) => {
                  t(null, n);
                }
              )
            );
          }),
          (N.prototype.promise = function() {
            const t = this;
            return new Promise(((n, e) => {
              t._fork(e, n);
            }));
          }),
          (N.prototype.isRejected = function() {
            return !1;
          }),
          (N.prototype.isResolved = function() {
            return !1;
          }),
          (N.prototype.isSettled = function() {
            return this.isRejected() || this.isResolved();
          }),
          (N.prototype.extractLeft = function() {
            return [];
          }),
          (N.prototype.extractRight = function() {
            return [];
          });
        const z = Object.create(N.prototype);
        function C(t) {
          this._computation = t;
        }
        function E(t) {
          this._value = t;
        }
        function W(t) {
          return new E(t);
        }
        function B(t) {
          this._value = t;
        }
        function L(t) {
          return new B(t);
        }
        function I() {
          this._isNever = !0;
        }
        (z._ap = function(t) {
          return new at(this)._ap(t);
        }),
          (z._map = function(t) {
            return new at(this)._map(t);
          }),
          (z._bimap = function(t, n) {
            return new at(this)._bimap(t, n);
          }),
          (z._chain = function(t) {
            return new at(this)._chain(t);
          }),
          (z._mapRej = function(t) {
            return new at(this)._mapRej(t);
          }),
          (z._chainRej = function(t) {
            return new at(this)._chainRej(t);
          }),
          (z._race = function(t) {
            return new at(this)._race(t);
          }),
          (z._both = function(t) {
            return new at(this)._both(t);
          }),
          (z._and = function(t) {
            return new at(this)._and(t);
          }),
          (z._or = function(t) {
            return new at(this)._or(t);
          }),
          (z._swap = function() {
            return new at(this)._swap();
          }),
          (z._fold = function(t, n) {
            return new at(this)._fold(t, n);
          }),
          (z._finally = function(t) {
            return new at(this)._finally(t);
          }),
          (C.prototype = Object.create(z)),
          (C.prototype._fork = function(t, n) {
            let e = !0,
              r = this._computation(
                (n) => {
                  e && ((e = !1), t(n));
                },
                (t) => {
                  e && ((e = !1), n(t));
                }
              );
            return (
              (function(t, n) {
                void 0 === t ||
                  (A(t) && t.length === 0) ||
                  j(
                    `Future expected its computation to return a nullary function or void\n  Actual: ${ 
                      c(t) 
                      }\n  From calling: ${ 
                      f(n)}`
                  );
              })(r, this._computation),
              function() {
                e && r && r(), (e = !1);
              }
            );
          }),
          (C.prototype.toString = function() {
            return `Future(${  f(this._computation)  })`;
          }),
          (E.prototype = Object.create(z)),
          (E.prototype._ap = s),
          (E.prototype._map = s),
          (E.prototype._chain = s),
          (E.prototype._race = s),
          (E.prototype._both = s),
          (E.prototype._and = s),
          (E.prototype._or = function(t) {
            return t;
          }),
          (E.prototype._finally = function(t) {
            return t._and(this);
          }),
          (E.prototype._swap = function() {
            return new B(this._value);
          }),
          (E.prototype._fork = function(t) {
            return t(this._value), a;
          }),
          (E.prototype.isRejected = function() {
            return !0;
          }),
          (E.prototype.extractLeft = function() {
            return [this._value];
          }),
          (E.prototype.toString = function() {
            return `Future.reject(${  c(this._value)  })`;
          }),
          (B.prototype = Object.create(z)),
          (B.prototype._race = s),
          (B.prototype._mapRej = s),
          (B.prototype._or = s),
          (B.prototype._and = function(t) {
            return t;
          }),
          (B.prototype._both = function(t) {
            const n = this._value;
            return t._map((t) => [n, t]);
          }),
          (B.prototype._swap = function() {
            return new E(this._value);
          }),
          (B.prototype._finally = function(t) {
            const n = this._value;
            return t._map(() => n);
          }),
          (B.prototype._fork = function(t, n) {
            return n(this._value), a;
          }),
          (B.prototype.isResolved = function() {
            return !0;
          }),
          (B.prototype.extractRight = function() {
            return [this._value];
          }),
          (B.prototype.toString = function() {
            return `Future.of(${  c(this._value)  })`;
          }),
          (I.prototype = Object.create(N.prototype)),
          (I.prototype._ap = s),
          (I.prototype._map = s),
          (I.prototype._bimap = s),
          (I.prototype._chain = s),
          (I.prototype._mapRej = s),
          (I.prototype._chainRej = s),
          (I.prototype._both = s),
          (I.prototype._or = s),
          (I.prototype._swap = s),
          (I.prototype._fold = s),
          (I.prototype._finally = s),
          (I.prototype._race = function(t) {
            return t;
          }),
          (I.prototype._fork = function() {
            return a;
          }),
          (I.prototype.toString = function() {
            return 'Future.never';
          });
        const Q = new I();
        function J(t) {
          return T(t) && !0 === t._isNever;
        }
        function G(t) {
          const n = this;
          (n.rej = a),
            (n.res = a),
            (n.rejected = !1),
            (n.resolved = !1),
            (n.value = null),
            (n.cancel = t._fork(
              (t) => {
                (n.value = t), (n.rejected = !0), (n.cancel = a), n.rej(t);
              },
              (t) => {
                (n.value = t), (n.resolved = !0), (n.cancel = a), n.res(t);
              }
            ));
        }
        (G.prototype = Object.create(z)),
          (G.prototype._fork = function(t, n) {
            return (
              this.rejected
                ? t(this.value)
                : this.resolved
                  ? n(this.value)
                  : ((this.rej = t), (this.res = n)),
              this.cancel
            );
          });
        const D = {
          rejected(t) {
            return this.cancel(), new E(t);
          },
          resolved(t) {
            return this.cancel(), new B(t);
          },
          run() {
            return this;
          },
          cancel() {},
        };
        function H(t) {
          this.other = t;
        }
        function U(t) {
          this.mapper = t;
        }
        function X(t, n) {
          (this.lmapper = t), (this.rmapper = n);
        }
        function Y(t) {
          this.mapper = t;
        }
        function $(t) {
          this.mapper = t;
        }
        function V(t) {
          this.mapper = t;
        }
        function K() {}
        function Z(t, n) {
          (this.lmapper = t), (this.rmapper = n);
        }
        function tt(t) {
          this.other = t;
        }
        function nt(t) {
          this.other = t;
        }
        function et(t) {
          this.other = t;
        }
        function rt(t) {
          this.other = t;
        }
        function it(t) {
          this.other = t;
        }
        function ot(t, n) {
          const e = this;
          (e.other = n),
            (e.cancel = n._fork(
              (n) => {
                t(new E(n), e);
              },
              (n) => {
                t(new B(n), e);
              }
            ));
        }
        function ut(t, n) {
          const e = this;
          (e.other = n),
            (e.cancel = n._fork((n) => {
              t(new E(n), e);
            }, a));
        }
        function at(t, n) {
          (this._spawn = t), (this._actions = n || M);
        }
        function st(t) {
          return { done: !1, value: t };
        }
        function ct(t) {
          return { done: !0, value: t };
        }
        (H.prototype = Object.create(D)),
          (H.prototype.resolved = function(t) {
            return (
              (function(t) {
                A(t) ||
                  j(
                    `Future#ap expects its first argument to be a Future of a Function\n  Actual: Future.of(${ 
                      c(t) 
                      })`
                  );
              })(t),
              this.other._map((n) => t(n))
            );
          }),
          (H.prototype.toString = function() {
            return `ap(${  this.other.toString()  })`;
          }),
          (U.prototype = Object.create(D)),
          (U.prototype.resolved = function(t) {
            return new B(this.mapper(t));
          }),
          (U.prototype.toString = function() {
            return `map(${  f(this.mapper)  })`;
          }),
          (X.prototype = Object.create(D)),
          (X.prototype.rejected = function(t) {
            return new E(this.lmapper(t));
          }),
          (X.prototype.resolved = function(t) {
            return new B(this.rmapper(t));
          }),
          (X.prototype.toString = function() {
            return `bimap(${  f(this.lmapper)  }, ${  f(this.rmapper)  })`;
          }),
          (Y.prototype = Object.create(D)),
          (Y.prototype.resolved = function(t) {
            return (function(t, n, e) {
              return T(t)
                ? t
                : S(
                    'Future#chain',
                    "the function it's given to return a Future",
                    t,
                    `\n  From calling: ${  f(n)  }\n  With: ${  c(e)}`
                  );
            })(this.mapper(t), this.mapper, t);
          }),
          (Y.prototype.toString = function() {
            return `chain(${  f(this.mapper)  })`;
          }),
          ($.prototype = Object.create(D)),
          ($.prototype.rejected = function(t) {
            return new E(this.mapper(t));
          }),
          ($.prototype.toString = function() {
            return `mapRej(${  f(this.mapper)  })`;
          }),
          (V.prototype = Object.create(D)),
          (V.prototype.rejected = function(t) {
            return (function(t, n, e) {
              return T(t)
                ? t
                : S(
                    'Future#chainRej',
                    "the function it's given to return a Future",
                    t,
                    `\n  From calling: ${  f(n)  }\n  With: ${  c(e)}`
                  );
            })(this.mapper(t), this.mapper, t);
          }),
          (V.prototype.toString = function() {
            return `chainRej(${  f(this.mapper)  })`;
          }),
          (K.prototype = Object.create(D)),
          (K.prototype.rejected = function(t) {
            return new B(t);
          }),
          (K.prototype.resolved = function(t) {
            return new E(t);
          }),
          (K.prototype.toString = function() {
            return 'swap()';
          }),
          (Z.prototype = Object.create(D)),
          (Z.prototype.rejected = function(t) {
            return new B(this.lmapper(t));
          }),
          (Z.prototype.resolved = function(t) {
            return new B(this.rmapper(t));
          }),
          (Z.prototype.toString = function() {
            return `fold(${  f(this.lmapper)  }, ${  f(this.rmapper)  })`;
          }),
          (tt.prototype = Object.create(D)),
          (tt.prototype.rejected = function(t) {
            return this.other._and(new E(t));
          }),
          (tt.prototype.resolved = function(t) {
            return this.other._map(() => t);
          }),
          (tt.prototype.cancel = function() {
            this.other._fork(a, a)();
          }),
          (tt.prototype.toString = function() {
            return `finally(${  this.other.toString()  })`;
          }),
          (nt.prototype = Object.create(D)),
          (nt.prototype.resolved = function() {
            return this.other;
          }),
          (nt.prototype.toString = function() {
            return `and(${  this.other.toString()  })`;
          }),
          (et.prototype = Object.create(D)),
          (et.prototype.rejected = function() {
            return this.other;
          }),
          (et.prototype.toString = function() {
            return `or(${  this.other.toString()  })`;
          }),
          (rt.prototype = Object.create(D)),
          (rt.prototype.run = function(t) {
            return new ot(t, new G(this.other));
          }),
          (rt.prototype.toString = function() {
            return `race(${  this.other.toString()  })`;
          }),
          (it.prototype = Object.create(D)),
          (it.prototype.resolved = function(t) {
            return this.other._map((n) => [t, n]);
          }),
          (it.prototype.run = function(t) {
            return new ut(t, new G(this.other));
          }),
          (it.prototype.toString = function() {
            return `both(${  this.other.toString()  })`;
          }),
          (ot.prototype = Object.create(rt.prototype)),
          (ut.prototype = Object.create(it.prototype)),
          (at.prototype = Object.create(N.prototype)),
          (at.prototype._transform = function(t) {
            return new at(
              this._spawn,
              ((n = t),
              {
                isEmpty: !1,
                size: (e = this._actions).size + 1,
                head: n,
                tail: e,
              })
            );
            let e, n;
          }),
          (at.prototype._ap = function(t) {
            return this._transform(new H(t));
          }),
          (at.prototype._map = function(t) {
            return this._transform(new U(t));
          }),
          (at.prototype._bimap = function(t, n) {
            return this._transform(new X(t, n));
          }),
          (at.prototype._chain = function(t) {
            return this._transform(new Y(t));
          }),
          (at.prototype._mapRej = function(t) {
            return this._transform(new $(t));
          }),
          (at.prototype._chainRej = function(t) {
            return this._transform(new V(t));
          }),
          (at.prototype._race = function(t) {
            return J(t) ? this : this._transform(new rt(t));
          }),
          (at.prototype._both = function(t) {
            return this._transform(new it(t));
          }),
          (at.prototype._and = function(t) {
            return this._transform(new nt(t));
          }),
          (at.prototype._or = function(t) {
            return this._transform(new et(t));
          }),
          (at.prototype._swap = function() {
            return this._transform(new K());
          }),
          (at.prototype._fold = function(t, n) {
            return this._transform(new Z(t, n));
          }),
          (at.prototype._finally = function(t) {
            return this._transform(new tt(t));
          }),
          (at.prototype._fork = function(t, n) {
            let e,
              r,
              o,
              u,
              s = new i(this._actions.size),
              c = new i(this._actions.size),
              f = a,
              h = !0;
            function p(i) {
              if (((o = !0), (e = i)._spawn)) {
                for (let u = e._actions; !u.isEmpty; )
                  s.unshift(u.head), (u = u.tail);
                e = e._spawn;
              }
              h &&
                (function() {
                  for (h = !1; ; ) {
                    if (((o = !1), (r = s.shift())))
                      (f = e._fork(l, y)), o || d();
                    else {
                      if (!(r = c.shift())) break;
                      f = e._fork(l, y);
                    }
                    if (!o) return void (h = !0);
                  }
                  f = e._fork(t, n);
                })();
            }
            function l(t) {
              p(r.rejected(t));
            }
            function y(t) {
              p(r.resolved(t));
            }
            function _(t, n) {
              if ((f(), s.clear(), h && r !== n))
                for (r.cancel(); (u = c.shift()) && u !== n; ) u.cancel();
              p(t);
            }
            function d() {
              for (; (u = s.pop()); ) {
                if (((u = u.run(_)), o)) return;
                c.unshift(u);
              }
              r = r.run(_);
            }
            return (
              p(this),
              function() {
                for (f(), r && r.cancel(); (u = c.shift()); ) u.cancel();
              }
            );
          }),
          (at.prototype.toString = function() {
            for (var t = '', n = this._actions; !n.isEmpty; )
              (t = `.${  n.head.toString()  }${t}`), (n = n.tail);
            return this._spawn.toString() + t;
          });
        let ft = 0,
          ht = 1,
          pt = 2;
        function lt(t, n) {
          (this._step = t), (this._init = n);
        }
        function yt(n, e) {
          return (
            t.Apply.test(e) || k('Future.ap', 1, 'be an Apply', e), t.ap(n, e)
          );
        }
        function _t(n, e) {
          return (
            t.Apply.test(n) || k('Future.ap', 0, 'be an Apply', n),
            arguments.length === 1 ? h(yt, n) : yt(n, e)
          );
        }
        function dt(n, e) {
          return t.Alt.test(e) || k('alt', 1, 'be an Alt', e), t.alt(n, e);
        }
        function vt(n, e) {
          return (
            t.Alt.test(n) || k('alt', 0, 'be an Alt', n),
            arguments.length === 1 ? h(dt, n) : dt(n, e)
          );
        }
        function mt(n, e) {
          return (
            t.Functor.test(e) || k('Future.map', 1, 'be a Functor', e),
            t.map(n, e)
          );
        }
        function gt(t, n) {
          return (
            A(t) || k('Future.map', 0, 'be a Function', t),
            arguments.length === 1 ? h(mt, t) : mt(t, n)
          );
        }
        function bt(n, e, r) {
          return (
            t.Bifunctor.test(r) || k('Future.bimap', 2, 'be a Bifunctor', r),
            t.bimap(n, e, r)
          );
        }
        function Ft(t, n, e) {
          return (
            A(n) || k('Future.bimap', 1, 'be a Function', n),
            arguments.length === 2 ? p(bt, t, n) : bt(t, n, e)
          );
        }
        function wt(t, n, e) {
          return (
            A(t) || k('Future.bimap', 0, 'be a Function', t),
            arguments.length === 1
              ? h(Ft, t)
              : arguments.length === 2 ? Ft(t, n) : Ft(t, n, e)
          );
        }
        function jt(n, e) {
          return (
            t.Chain.test(e) || k('Future.chain', 1, 'be a Chain', e),
            t.chain(n, e)
          );
        }
        function kt(t, n) {
          return (
            A(t) || k('Future.chain', 0, 'be a Function', t),
            arguments.length === 1 ? h(jt, t) : jt(t, n)
          );
        }
        function Ot(t, n) {
          return T(n) || S('Future.mapRej', 1, n), n.mapRej(t);
        }
        function St(t, n) {
          return T(n) || S('Future.chainRej', 1, n), n.chainRej(t);
        }
        function At(t, n) {
          return T(n) || S('Future.finally', 1, n), n.finally(t);
        }
        function xt(t, n) {
          return (
            T(t) || S('Future.finally', 0, t),
            arguments.length === 1 ? h(At, t) : At(t, n)
          );
        }
        function Rt(t, n) {
          return T(n) || S('Future.and', 1, n), t.and(n);
        }
        function qt(t, n) {
          return T(n) || S('Future.both', 1, n), t.both(n);
        }
        function Mt(t, n) {
          return T(n) || S('Future.or', 1, n), t.or(n);
        }
        function Pt(t, n) {
          return T(n) || S('Future.race', 1, n), n.race(t);
        }
        function Nt(t, n) {
          return (
            T(t) || S('Future.race', 0, t),
            arguments.length === 1 ? h(Pt, t) : Pt(t, n)
          );
        }
        function Tt(t, n, e) {
          return T(e) || S('Future.fold', 2, e), e.fold(t, n);
        }
        function zt(t, n, e) {
          return (
            A(n) || k('Future.fold', 1, 'be a function', n),
            arguments.length === 2 ? p(Tt, t, n) : Tt(t, n, e)
          );
        }
        function Ct(t, n) {
          return T(n) || S('Future.done', 1, n), n.done(t);
        }
        function Et(t, n, e) {
          return T(e) || S('Future.fork', 2, e), e._fork(t, n);
        }
        function Wt(t, n, e) {
          return (
            A(n) || k('Future.fork', 1, 'be a function', n),
            arguments.length === 2 ? p(Et, t, n) : Et(t, n, e)
          );
        }
        function Bt(t, n) {
          return T(n) || S('Future.value', 1, n), n.value(t);
        }
        function Lt(t, n) {
          (this._mval = t), (this._mfunc = n);
        }
        function It(t) {
          return t.isSettled()
            ? t
            : J(t)
              ? this
              : typeof t._time === 'number'
                ? t._time < this._time ? t : this
                : z._race.call(this, t);
        }
        function Qt(t, n) {
          (this._time = t), (this._value = n);
        }
        function Jt(t, n) {
          (this._time = t), (this._value = n);
        }
        function Gt(t, n) {
          return t === 1 / 0 ? Q : new Qt(t, n);
        }
        function Dt(t, n) {
          return t === 1 / 0 ? Q : new Jt(t, n);
        }
        function Ht(t) {
          this._fn = t;
        }
        function Ut(t) {
          return A(t) || k('Future.try', 0, 'be a function', t), new Ht(t);
        }
        (lt.prototype = Object.create(z)),
          (lt.prototype._fork = function(t, n) {
            let e = this._step,
              r = this._init,
              i = ft,
              o = a,
              u = st(r);
            function s(t) {
              (u = t), (i = i === ft ? ht : c());
            }
            function c() {
              for (; !u.done; ) {
                i = ft;
                const r = e(st, ct, u.value);
                if (((o = r._fork(t, s)), i !== ht)) return void (i = pt);
              }
              n(u.value);
            }
            return (
              c(),
              function() {
                o();
              }
            );
          }),
          (lt.prototype.toString = function() {
            return (
              `Future.chainRec(${  f(this._step)  }, ${  c(this._init)  })`
            );
          }),
          (Lt.prototype = Object.create(z)),
          (Lt.prototype._fork = function(t, n) {
            let e,
              r,
              i,
              o,
              u = !1,
              s = !1,
              f = !1;
            function h(n) {
              f || ((f = !0), t(n));
            }
            return (
              (i = this._mval._fork(h, (t) => {
                if (((i = a), !u)) return (s = !0), void (r = t);
                n(e(t));
              })),
              (o = this._mfunc._fork(h, (t) => {
                if (
                  ((o = a),
                  (function(t) {
                    A(t) ||
                      j(
                        `Future#ap expects its first argument to be a Future of a Function\n  Actual: Future.of(${ 
                          c(t) 
                          })`
                      );
                  })(t),
                  !s)
                )
                  return (u = !0), void (e = t);
                n(t(r));
              })),
              function() {
                i(), o();
              }
            );
          }),
          (Lt.prototype.toString = function() {
            return (
              `new ParallelAp(${ 
              this._mval.toString() 
              }, ${ 
              this._mfunc.toString() 
              })`
            );
          }),
          (Qt.prototype = Object.create(z)),
          (Qt.prototype._race = It),
          (Qt.prototype._swap = function() {
            return new Jt(this._time, this._value);
          }),
          (Qt.prototype._fork = function(t, n) {
            const e = setTimeout(n, this._time, this._value);
            return function() {
              clearTimeout(e);
            };
          }),
          (Qt.prototype.extractRight = function() {
            return [this._value];
          }),
          (Qt.prototype.toString = function() {
            return (
              `Future.after(${  c(this._time)  }, ${  c(this._value)  })`
            );
          }),
          (Jt.prototype = Object.create(z)),
          (Jt.prototype._race = It),
          (Jt.prototype._swap = function() {
            return new Qt(this._time, this._value);
          }),
          (Jt.prototype._fork = function(t) {
            const n = setTimeout(t, this._time, this._value);
            return function() {
              clearTimeout(n);
            };
          }),
          (Jt.prototype.extractLeft = function() {
            return [this._value];
          }),
          (Jt.prototype.toString = function() {
            return (
              `Future.rejectAfter(${ 
              c(this._time) 
              }, ${ 
              c(this._value) 
              })`
            );
          }),
          (Ht.prototype = Object.create(z)),
          (Ht.prototype._fork = function(t, n) {
            let e;
            try {
              e = this._fn();
            } catch (n) {
              return t(n), a;
            }
            return n(e), a;
          }),
          (Ht.prototype.toString = function() {
            return `Future.try(${  f(this._fn)  })`;
          });
        let Xt = (Kt.Cold = 0),
          Yt = (Kt.Pending = 1),
          $t = (Kt.Rejected = 2),
          Vt = (Kt.Resolved = 3);
        function Kt(t) {
          (this._pure = t), this.reset();
        }
        function Zt(t, n) {
          (this._fn = t), (this._a = n);
        }
        function tn(t, n, e) {
          (this._fn = t), (this._a = n), (this._b = e);
        }
        function nn(t, n, e, r) {
          (this._fn = t), (this._a = n), (this._b = e), (this._c = r);
        }
        function en(t, n) {
          (this._fn = t), (this._a = n);
        }
        function rn(t, n, e) {
          (this._fn = t), (this._a = n), (this._b = e);
        }
        function on(t, n, e, r) {
          (this._fn = t), (this._a = n), (this._b = e), (this._c = r);
        }
        function un(t, n) {
          (this._fn = t), (this._a = n);
        }
        function an(t, n, e) {
          (this._fn = t), (this._a = n), (this._b = e);
        }
        function sn(t, n, e, r) {
          (this._fn = t), (this._a = n), (this._b = e), (this._c = r);
        }
        function cn(t) {
          return q((n = t)) && A(n.next)
            ? t
            : k(
                'Future.do',
                0,
                'return an iterator, maybe you forgot the "*"',
                t
              );
          let n;
        }
        function fn(t) {
          let n;
          return (
            (q((n = t)) && typeof n.done === 'boolean') ||
              j(
                `Future.do was given an invalid generator: Its iterator did not return a valid iteration from iterator.next()\n  Actual: ${ 
                  c(t)}`
              ),
            t.done || T(t.value)
              ? t
              : S(
                  'Future.do',
                  'the iterator to produce only valid Futures',
                  t.value,
                  "\n  Tip: If you're using a generator, make sure you always yield a Future"
                )
          );
        }
        function hn(t) {
          this._generator = t;
        }
        function pn(t) {
          return A(t) || k('Future.do', 0, 'be a Function', t), new hn(t);
        }
        function ln(t, n, e) {
          (this._acquire = t), (this._dispose = n), (this._consume = e);
        }
        function yn(t, n, e) {
          return A(e) || k('Future.hook', 2, 'be a Future', e), new ln(t, n, e);
        }
        function _n(t, n, e) {
          return (
            A(n) || k('Future.hook', 1, 'be a function', n),
            arguments.length === 2 ? p(yn, t, n) : yn(t, n, e)
          );
        }
        function dn(t) {
          this._fn = t;
        }
        function vn(t, n) {
          return T(t)
            ? t
            : S(
                'Future.parallel',
                `its second argument to be an array of valid Futures. The value at position ${ 
                  n 
                  } in the array is not a Future`,
                t
              );
        }
        function mn(t, n) {
          (this._futures = n),
            (this._length = n.length),
            (this._max = Math.min(this._length, t));
        }
        (Kt.prototype = Object.create(z)),
          (Kt.prototype.isRejected = function() {
            return this._state === $t;
          }),
          (Kt.prototype.isResolved = function() {
            return this._state === Vt;
          }),
          (Kt.prototype.extractLeft = function() {
            return this.isRejected() ? [this._value] : [];
          }),
          (Kt.prototype.extractRight = function() {
            return this.isResolved() ? [this._value] : [];
          }),
          (Kt.prototype._addToQueue = function(t, n) {
            const e = this;
            if (e._state > Yt) return a;
            const r =
              e._queue.push(
                new function(t, n) {
                  (this[$t] = t), (this[Vt] = n);
                }(t, n)
              ) - 1;
            return (
              (e._queued += 1),
              function() {
                e._state > Yt ||
                  ((e._queue[r] = void 0),
                  (e._queued -= 1),
                  e._queued === 0 && e.reset());
              }
            );
          }),
          (Kt.prototype._drainQueue = function() {
            if (!(this._state <= Yt) && this._queued !== 0) {
              for (
                let t = this._queue,
                  n = t.length,
                  e = this._state,
                  r = this._value,
                  i = 0;
                i < n;
                i++
              )
                t[i] && t[i][e](r), (t[i] = void 0);
              (this._queue = void 0), (this._queued = 0);
            }
          }),
          (Kt.prototype.reject = function(t) {
            this._state > Yt ||
              ((this._value = t), (this._state = $t), this._drainQueue());
          }),
          (Kt.prototype.resolve = function(t) {
            this._state > Yt ||
              ((this._value = t), (this._state = Vt), this._drainQueue());
          }),
          (Kt.prototype.run = function() {
            const t = this;
            t._state > Xt ||
              ((t._state = Yt),
              (t._cancel = t._pure._fork(
                (n) => {
                  t.reject(n);
                },
                (n) => {
                  t.resolve(n);
                }
              )));
          }),
          (Kt.prototype.reset = function() {
            this._state !== Xt &&
              (this._state > Yt && this._cancel(),
              (this._cancel = a),
              (this._queue = []),
              (this._queued = 0),
              (this._value = void 0),
              (this._state = Xt));
          }),
          (Kt.prototype._fork = function(t, n) {
            let e = a;
            switch (this._state) {
              case Yt:
                e = this._addToQueue(t, n);
                break;
              case $t:
                t(this._value);
                break;
              case Vt:
                n(this._value);
                break;
              default:
                (e = this._addToQueue(t, n)), this.run();
            }
            return e;
          }),
          (Kt.prototype.toString = function() {
            return `Future.cache(${  this._pure.toString()  })`;
          }),
          (Zt.prototype = Object.create(z)),
          (Zt.prototype._fork = function(t, n) {
            let e;
            try {
              e = this._fn(this._a);
            } catch (n) {
              return t(n), a;
            }
            return n(e), a;
          }),
          (Zt.prototype.toString = function() {
            return `Future.encase(${  f(this._fn)  }, ${  c(this._a)  })`;
          }),
          (tn.prototype = Object.create(z)),
          (tn.prototype._fork = function(t, n) {
            let e;
            try {
              e = this._fn(this._a, this._b);
            } catch (n) {
              return t(n), a;
            }
            return n(e), a;
          }),
          (tn.prototype.toString = function() {
            return (
              `Future.encase2(${ 
              f(this._fn) 
              }, ${ 
              c(this._a) 
              }, ${ 
              c(this._b) 
              })`
            );
          }),
          (nn.prototype = Object.create(z)),
          (nn.prototype._fork = function(t, n) {
            let e;
            try {
              e = this._fn(this._a, this._b, this._c);
            } catch (n) {
              return t(n), a;
            }
            return n(e), a;
          }),
          (nn.prototype.toString = function() {
            return (
              `Future.encase3(${ 
              f(this._fn) 
              }, ${ 
              c(this._a) 
              }, ${ 
              c(this._b) 
              }, ${ 
              c(this._c) 
              })`
            );
          }),
          (en.prototype = Object.create(z)),
          (en.prototype._fork = function(t, n) {
            let e = !0;
            return (
              this._fn(this._a, (r, i) => {
                e && ((e = !1), r ? t(r) : n(i));
              }),
              function() {
                e = !1;
              }
            );
          }),
          (en.prototype.toString = function() {
            return `Future.encaseN(${  f(this._fn)  }, ${  c(this._a)  })`;
          }),
          (rn.prototype = Object.create(z)),
          (rn.prototype._fork = function(t, n) {
            let e = !0;
            return (
              this._fn(this._a, this._b, (r, i) => {
                e && ((e = !1), r ? t(r) : n(i));
              }),
              function() {
                e = !1;
              }
            );
          }),
          (rn.prototype.toString = function() {
            return (
              `Future.encaseN2(${ 
              f(this._fn) 
              }, ${ 
              c(this._a) 
              }, ${ 
              c(this._b) 
              })`
            );
          }),
          (on.prototype = Object.create(z)),
          (on.prototype._fork = function(t, n) {
            let e = !0;
            return (
              this._fn(this._a, this._b, this._c, (r, i) => {
                e && ((e = !1), r ? t(r) : n(i));
              }),
              function() {
                e = !1;
              }
            );
          }),
          (on.prototype.toString = function() {
            return (
              `Future.encaseN3(${ 
              f(this._fn) 
              }, ${ 
              c(this._a) 
              }, ${ 
              c(this._b) 
              }, ${ 
              c(this._c) 
              })`
            );
          }),
          (un.prototype = Object.create(z)),
          (un.prototype._fork = function(t, n) {
            let e,
              r,
              i,
              o = this._fn,
              u = this._a,
              a = !0;
            return (
              ((e = o(u)),
              (r = o),
              (i = u),
              x(e)
                ? e
                : j(
                    `Future.encaseP expects the function it's given to return a Promise/Thenable\n  Actual: ${ 
                      c(e) 
                      }\n  From calling: ${ 
                      f(r) 
                      }\n  With: ${ 
                      c(i)}`
                  )).then(
                y((t) => {
                  a && ((a = !1), n(t));
                }),
                y((n) => {
                  a && ((a = !1), t(n));
                })
              ),
              function() {
                a = !1;
              }
            );
          }),
          (un.prototype.toString = function() {
            return `Future.encaseP(${  f(this._fn)  }, ${  c(this._a)  })`;
          }),
          (an.prototype = Object.create(z)),
          (an.prototype._fork = function(t, n) {
            let e,
              r,
              i,
              o,
              u = this._fn,
              a = this._a,
              s = this._b,
              h = !0;
            return (
              ((e = u(a, s)),
              (r = u),
              (i = a),
              (o = s),
              x(e)
                ? e
                : j(
                    `Future.encaseP2 expects the function it's given to return a Promise/Thenable\n  Actual: ${ 
                      c(e) 
                      }\n  From calling: ${ 
                      f(r) 
                      }\n  With 1: ${ 
                      c(i) 
                      }\n  With 2: ${ 
                      c(o)}`
                  )).then(
                y((t) => {
                  h && ((h = !1), n(t));
                }),
                y((n) => {
                  h && ((h = !1), t(n));
                })
              ),
              function() {
                h = !1;
              }
            );
          }),
          (an.prototype.toString = function() {
            return (
              `Future.encaseP2(${ 
              f(this._fn) 
              }, ${ 
              c(this._a) 
              }, ${ 
              c(this._b) 
              })`
            );
          }),
          (sn.prototype = Object.create(z)),
          (sn.prototype._fork = function(t, n) {
            let e,
              r,
              i,
              o,
              u,
              a = this._fn,
              s = this._a,
              h = this._b,
              p = this._c,
              l = !0;
            return (
              ((e = a(s, h, p)),
              (r = a),
              (i = s),
              (o = h),
              (u = p),
              x(e)
                ? e
                : j(
                    `Future.encaseP3 expects the function it's given to return a Promise/Thenable\n  Actual: ${ 
                      c(e) 
                      }\n  From calling: ${ 
                      f(r) 
                      }\n  With 1: ${ 
                      c(i) 
                      }\n  With 2: ${ 
                      c(o) 
                      }\n  With 3: ${ 
                      c(u)}`
                  )).then(
                y((t) => {
                  l && ((l = !1), n(t));
                }),
                y((n) => {
                  l && ((l = !1), t(n));
                })
              ),
              function() {
                l = !1;
              }
            );
          }),
          (sn.prototype.toString = function() {
            return (
              `Future.encaseP3(${ 
              f(this._fn) 
              }, ${ 
              c(this._a) 
              }, ${ 
              c(this._b) 
              }, ${ 
              c(this._c) 
              })`
            );
          }),
          (hn.prototype = Object.create(z)),
          (hn.prototype._fork = function(t, n) {
            let e,
              r,
              i = cn(this._generator()),
              o = ft,
              u = a;
            function s(t) {
              if (((r = t), o === pt)) return c();
              (o = ht), (e = fn(i.next(r)));
            }
            function c() {
              for (e = fn(i.next(r)); !e.done; )
                if (((o = ft), (u = e.value._fork(t, s)), o !== ht))
                  return void (o = pt);
              n(e.value);
            }
            return (
              c(),
              function() {
                u();
              }
            );
          }),
          (hn.prototype.toString = function() {
            return `Future.do(${  f(this._generator)  })`;
          }),
          (ln.prototype = Object.create(z)),
          (ln.prototype._fork = function(t, n) {
            let e,
              r,
              i,
              o = this._acquire,
              u = this._dispose,
              s = this._consume,
              h = a,
              p = a,
              l = a;
            function y() {
              l(i);
            }
            function _() {
              let n,
                i,
                o,
                a = u(r);
              return (
                (i = u),
                (o = r),
                T((n = a)) ||
                  S(
                    'Future.hook',
                    "the first function it's given to return a Future",
                    n,
                    `\n  From calling: ${  f(i)  }\n  With: ${  c(o)}`
                  ),
                (e = a._fork(t, y))
              );
            }
            function d() {
              p(), _()();
            }
            function v(n) {
              (l = t), (i = n), _();
            }
            function m(t) {
              (l = n), (i = t), _();
            }
            return (
              (h = o._fork(t, (t) => {
                const n = s((r = t));
                (function(t, n, e) {
                  T(t) ||
                    S(
                      'Future.hook',
                      "the second function it's given to return a Future",
                      t,
                      `\n  From calling: ${  f(n)  }\n  With: ${  c(e)}`
                    );
                })(n, s, r),
                  (e = d),
                  (p = n._fork(v, m));
              })),
              (e = e || h),
              function() {
                e();
              }
            );
          }),
          (ln.prototype.toString = function() {
            return (
              `Future.hook(${ 
              this._acquire.toString() 
              }, ${ 
              f(this._dispose) 
              }, ${ 
              f(this._consume) 
              })`
            );
          }),
          (dn.prototype = Object.create(z)),
          (dn.prototype._fork = function(t, n) {
            let e = !0;
            return (
              this._fn((r, i) => {
                e && ((e = !1), r ? t(r) : n(i));
              }),
              function() {
                e = !1;
              }
            );
          }),
          (dn.prototype.toString = function() {
            return `Future.node(${  f(this._fn)  })`;
          }),
          (mn.prototype = Object.create(z)),
          (mn.prototype._fork = function(t, n) {
            let e = this._futures,
              r = this._length,
              i = this._max,
              o = new Array(r),
              u = new Array(r),
              s = 0,
              c = 0,
              f = !1;
            function h() {
              for (let t = 0; t < r; t++) o[t] && o[t]();
            }
            function p(i) {
              c++,
                (o[i] = e[i]._fork(
                  (n) => {
                    (o[i] = a), h(), t(n);
                  },
                  (t) => {
                    (o[i] = a),
                      (u[i] = t),
                      c--,
                      s === r && c === 0 ? n(u) : f && l();
                  }
                ));
            }
            function l() {
              for (f = !1; s < r && c < i; ) p(s++);
              f = !0;
            }
            return l(), h;
          }),
          (mn.prototype.toString = function() {
            return (
              `Future.parallel(${  this._max  }, ${  c(this._futures)  })`
            );
          });
        const gn = new B([]);
        function bn(t, n) {
          let e;
          (e = n),
            Array.isArray(e) || k('Future.parallel', 1, 'be an array', n);
          const r = (function(t, n) {
            for (var e = t.length, r = new Array(e), i = 0; i < e; i++)
              r[i] = n(t[i], i, t);
            return r;
          })(n, vn);
          return r.length === 0 ? gn : new mn(t, r);
        }
        function Fn(t) {
          this._fn = t;
        }
        (Fn.prototype = Object.create(z)),
          (Fn.prototype._fork = function(t, n) {
            let e,
              r,
              i = !0;
            return (
              ((e = this._fn()),
              (r = this._fn),
              x(e)
                ? e
                : j(
                    `Future.tryP expects the function it's given to return a Promise/Thenable\n  Actual: ${ 
                      c(e) 
                      }\n  From calling: ${ 
                      f(r)}`
                  )).then(
                y((t) => {
                  i && ((i = !1), n(t));
                }),
                y((n) => {
                  i && ((i = !1), t(n));
                })
              ),
              function() {
                i = !1;
              }
            );
          }),
          (Fn.prototype.toString = function() {
            return `Future.tryP(${  c(this._fn)  })`;
          }),
          typeof Object.create !== 'function' &&
            w('Please polyfill Object.create to use Fluture'),
          typeof Object.assign !== 'function' &&
            w('Please polyfill Object.assign to use Fluture'),
          typeof Array.isArray !== 'function' &&
            w('Please polyfill Array.isArray to use Fluture'),
          (N.of = N[d.of] = L),
          (N.chainRec = N[d.chainRec] = function(t, n) {
            return new lt(t, n);
          }),
          (N.reject = W),
          (N.ap = _t),
          (N.map = gt),
          (N.bimap = wt),
          (N.chain = kt);
        const wn = r(N, Q, Nt, (t, n) => new Lt(t, n));
        function jn(t) {
          return t instanceof wn || e(t) === wn['@@type'];
        }
        (wn.of = wn[d.of]),
          (wn.zero = wn[d.zero]),
          (wn.map = gt),
          (wn.ap = _t),
          (wn.alt = vt);
        const kn = Object.freeze({
          Future: N,
          default: N,
          Par: wn,
          isParallel: jn,
          seq(t) {
            return jn(t) || k('Future.seq', 0, 'to be a Par', t), t.sequential;
          },
          isFuture: T,
          reject: W,
          of: L,
          never: Q,
          isNever: J,
          after(t, n) {
            return (
              R(t) || k('Future.after', 0, 'be a positive integer', t),
              arguments.length === 1 ? h(Gt, t) : Gt(t, n)
            );
          },
          rejectAfter(t, n) {
            return (
              R(t) || k('Future.rejectAfter', 0, 'be a positive integer', t),
              arguments.length === 1 ? h(Dt, t) : Dt(t, n)
            );
          },
          attempt: Ut,
          try: Ut,
          cache(t) {
            return T(t) || S('Future.cache', 0, t), new Kt(t);
          },
          encase: function t(n, e) {
            return (
              A(n) || k('Future.encase', 0, 'be a function', n),
              arguments.length === 1 ? h(t, n) : new Zt(n, e)
            );
          },
          encase2: function t(n, e, r) {
            switch ((A(n) || k('Future.encase2', 0, 'be a function', n),
            arguments.length)) {
              case 1:
                return h(t, n);
              case 2:
                return p(t, n, e);
              default:
                return new tn(n, e, r);
            }
          },
          encase3: function t(n, e, r, i) {
            switch ((A(n) || k('Future.encase3', 0, 'be a function', n),
            arguments.length)) {
              case 1:
                return h(t, n);
              case 2:
                return p(t, n, e);
              case 3:
                return l(t, n, e, r);
              default:
                return new nn(n, e, r, i);
            }
          },
          encaseN: function t(n, e) {
            return (
              A(n) || k('Future.encaseN', 0, 'be a function', n),
              arguments.length === 1 ? h(t, n) : new en(n, e)
            );
          },
          encaseN2: function t(n, e, r) {
            switch ((A(n) || k('Future.encaseN2', 0, 'be a function', n),
            arguments.length)) {
              case 1:
                return h(t, n);
              case 2:
                return p(t, n, e);
              default:
                return new rn(n, e, r);
            }
          },
          encaseN3: function t(n, e, r, i) {
            switch ((A(n) || k('Future.encaseN3', 0, 'be a function', n),
            arguments.length)) {
              case 1:
                return h(t, n);
              case 2:
                return p(t, n, e);
              case 3:
                return l(t, n, e, r);
              default:
                return new on(n, e, r, i);
            }
          },
          encaseP: function t(n, e) {
            return (
              A(n) || k('Future.encaseP', 0, 'be a function', n),
              arguments.length === 1 ? h(t, n) : new un(n, e)
            );
          },
          encaseP2: function t(n, e, r) {
            switch ((A(n) || k('Future.encaseP2', 0, 'be a function', n),
            arguments.length)) {
              case 1:
                return h(t, n);
              case 2:
                return p(t, n, e);
              default:
                return new an(n, e, r);
            }
          },
          encaseP3: function t(n, e, r, i) {
            switch ((A(n) || k('Future.encaseP3', 0, 'be a function', n),
            arguments.length)) {
              case 1:
                return h(t, n);
              case 2:
                return p(t, n, e);
              case 3:
                return l(t, n, e, r);
              default:
                return new sn(n, e, r, i);
            }
          },
          go: pn,
          do: pn,
          hook(t, n, e) {
            return (
              T(t) || S('Future.hook', 0, t),
              arguments.length === 1
                ? h(_n, t)
                : arguments.length === 2 ? _n(t, n) : _n(t, n, e)
            );
          },
          node(t) {
            return A(t) || k('Future.node', 0, 'be a function', t), new dn(t);
          },
          parallel(t, n) {
            return (
              R(t) || k('Future.parallel', 0, 'be a positive integer', t),
              arguments.length === 1 ? h(bn, t) : bn(t, n)
            );
          },
          tryP(t) {
            return A(t) || k('Future.tryP', 0, 'be a function', t), new Fn(t);
          },
          ap: _t,
          alt: vt,
          map: gt,
          bimap: wt,
          chain: kt,
          mapRej(t, n) {
            return (
              A(t) || k('Future.mapRej', 0, 'be a Function', t),
              arguments.length === 1 ? h(Ot, t) : Ot(t, n)
            );
          },
          chainRej(t, n) {
            return (
              A(t) || k('Future.chainRej', 0, 'be a Function', t),
              arguments.length === 1 ? h(St, t) : St(t, n)
            );
          },
          lastly: xt,
          finally: xt,
          and(t, n) {
            return (
              T(t) || S('Future.and', 0, t),
              arguments.length === 1 ? h(Rt, t) : Rt(t, n)
            );
          },
          both(t, n) {
            return (
              T(t) || S('Future.both', 0, t),
              arguments.length === 1 ? h(qt, t) : qt(t, n)
            );
          },
          or(t, n) {
            return (
              T(t) || S('Future.or', 0, t),
              arguments.length === 1 ? h(Mt, t) : Mt(t, n)
            );
          },
          race: Nt,
          swap(t) {
            return T(t) || S('Future.swap', 0, t), t.swap();
          },
          fold(t, n, e) {
            return (
              A(t) || k('Future.fold', 0, 'be a function', t),
              arguments.length === 1
                ? h(zt, t)
                : arguments.length === 2 ? zt(t, n) : zt(t, n, e)
            );
          },
          done(t, n) {
            return (
              A(t) || k('Future.done', 0, 'be a Function', t),
              arguments.length === 1 ? h(Ct, t) : Ct(t, n)
            );
          },
          fork(t, n, e) {
            return (
              A(t) || k('Future.fork', 0, 'be a function', t),
              arguments.length === 1
                ? h(Wt, t)
                : arguments.length === 2 ? Wt(t, n) : Wt(t, n, e)
            );
          },
          promise(t) {
            return T(t) || S('Future.promise', 0, t), t.promise();
          },
          value(t, n) {
            return (
              A(t) || k('Future.value', 0, 'be a Function', t),
              arguments.length === 1 ? h(Bt, t) : Bt(t, n)
            );
          },
          extractLeft(t) {
            return T(t) || S('Future.extractLeft', 0, t), t.extractLeft();
          },
          extractRight(t) {
            return T(t) || S('Future.extractRight', 0, t), t.extractRight();
          },
        });
        return Object.assign(N, kn);
      })(m, g, b, F, j);
    }),
    O = p((t, n, e) => k((r, i) => {
        const o = new XMLHttpRequest();
        o || r({ error: 'Unable to create a XMLHttp instance.' }),
          (o.onreadystatechange = (function(t, n, e) {
            return function() {
              try {
                t.readyState === 4 &&
                  ((r = t.status),
                  [200, 201, 202, 203, 204, 205, 206].some((t) => t === r)
                    ? e(t.response)
                    : n({
                        error:
                          `Your httpRequest failed with an error code of ${ 
                          t.status}`,
                      }));
              } catch (t) {
                n({ error: `Caught Exception: ${  t.description}` });
              }
              let r;
            };
          })(o, r, i)),
          o.open(t, n),
          (o.responseType = 'json'),
          e
            ? (o.setRequestHeader(
                'Content-type',
                'application/json; charset=utf-8'
              ),
              o.send(JSON.stringify(e)))
            : o.send();
      })),
    S = O('GET', { '@@functional/placeholder': !0 }, !1),
    A = O('POST'),
    x = Object.freeze({ getJson: S, postJson: A });
  return Object.assign({}, x);
})();
