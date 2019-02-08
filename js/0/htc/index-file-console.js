const console = {
  log: ( string ) => {
    t.value += string + '\r'
  },
  clear: () => {
    t.value = ''
  }
}