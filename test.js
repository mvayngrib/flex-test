
const test = require('tape')
const flex = require('./flex')

const expected = [
  {
    in: {
      flex: 1
    },
    out: {
      IE: '1 1 auto',
      normal: '1 1 0%'
    }
  },

  {
    in: {
      flex: 5
    },
    out: {
      IE: '5 1 auto',
      normal: '5 1 0%'
    }
  },

  {
    in: {
      flex: '2'
    },
    out: {
      IE: '2 1 auto',
      normal: '2 1 0%'
    }
  },

  {
    in: {
      flex: 'auto'
    },
    out: {
      IE: '1 1 auto',
      normal: '1 1 auto'
    }
  },

  {
    in: {
      flex: 'initial'
    },
    out: {
      IE: '0 1 auto',
      normal: '0 1 auto'
    }
  },

  {
    in: {
      flex: null
    },
    out: {
      IE: '0 1 auto',
      normal: '0 1 auto'
    }
  },

  {
    in: {
      flex: '1 1 50%'
    },
    out: {
      IE: '1 1 50%',
      normal: '1 1 50%'
    }
  },

  {
    in: {
      flexGrow: 1
    },
    out: {
      IE: '1 1 auto',
      normal: '1 1 0%'
    }
  },

  {
    in: {
      flexGrow: 1,
      flexShrink: 2
    },
    out: {
      IE: '1 2 auto',
      normal: '1 2 0%'
    }
  },

  {
    in: {
      flexGrow: 2,
      flexShrink: 1,
      flexBasis: '10px'
    },
    out: {
      IE: '2 1 10px',
      normal: '2 1 10px'
    }
  }
]

test('basic', function (t) {
  expected.forEach(set => {
    t.equal(flex(set.in, true), set.out.IE)
    t.equal(flex(set.in, false), set.out.normal)
  })

  t.end()
})
