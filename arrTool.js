(() => {
  function toProxy() {
    let handler = {
      get: function(target, name) {
        const temp = name
        name = Number(name)
        if (Number.isNaN(name) || !Number.isInteger(name) || name >= 0) {
          return Reflect.get(target, temp)
        } else {
          return target[target.length + name]
        }
      },
      set: function(target, name, value) {
        const temp = name, len = target.length
        name = Number(name)
        if (Number.isNaN(name) || !Number.isInteger(name) || name >= 0) {
          return Reflect.set(target, temp, value)
        } else {
          // 负数索引越界返回undefined
          if (name < -len) return undefined
          target[len + name] = value
          return target[len + name]
        }
      }
    }
  
    return new Proxy(this, handler)
  }

  function shuffle() {
    for (let i = this.length; i; i--) {
      let rand = Math.floor(Math.random() * i)
      ;[this[i - 1], this[rand]] = [this[rand], this[i - 1]]
    }
  }
  
  Object.defineProperties(Array.prototype, {
    'toProxy': {
      value: toProxy,
      enumerable: false,
    },
    'shuffle': {
      value: shuffle,
      enumerable: false,
    }
  })
})()