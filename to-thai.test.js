var toThai = require('./to-thai')

describe('Test toThai function !', () => {
  it('should change qwerty to ๆไำพะ', () => {
    var text = 'qwerty'
    var formatted = toThai(text)
    expect(formatted).toEqual('ๆไำพะั')
  })

  it('should change ][ to ลบ', () => {
    var text = ']['
    var formatted = toThai(text)
    expect(formatted).toEqual('ลบ')
  })

  it('should change ryo]e to พันลำ', () => {
    var text = 'ryo]e'
    var formatted = toThai(text)
    expect(formatted).toEqual('พันลำ')
  })

  it('should change uiop to ีรนย', () => {
    var text = 'uiop'
    var formatted = toThai(text)
    expect(formatted).toEqual('ีรนย')
  })

  it("should change dkigfbomk'-kd]y[8'0tgs'k to การเดินทางขากลับคงจะเหงา", () => {
    var text = "dkigfbomk'-kd]y[8'0tgs'k"
    var formatted = toThai(text)
    expect(formatted).toEqual('การเดินทางขากลับคงจะเหงา')
  })

  it("should change vbogmviNgoH9 to อินเทอร์เน็ต", () => {
    var text = "vbogmviNgoH9"
    var formatted = toThai(text)
    expect(formatted).toEqual('อินเทอร์เน็ต')
  })

  it("should change -v[spyd-v'xudc]f^gfjo=yfd]k'cl'ginv'iv'lucf' to ขอบหยักของปีกแลดูเด่นชัดกลางแสงเรืองรองสีแดง", () => {
    var text = "-v[spyd-v'xudc]f^gfjo=yfd]k'cl'ginv'iv'lucf'"
    var formatted = toThai(text)
    expect(formatted).toEqual('ขอบหยักของปีกแลดูเด่นชัดกลางแสงเรืองรองสีแดง')
  })

  it("should change Cyog/hkf^rkp6 ,yomyh'l;p'k,c]tojkd]y; to ฉันเฝ้าดูพายุ มันทั้งสวยงามและน่ากลัว", () => {
    var text = "Cyog/hkf^rkp6 ,yomyh'l;p'k,c]tojkd]y;"
    var formatted = toThai(text)
    expect(formatted).toEqual('ฉันเฝ้าดูพายุ มันทั้งสวยงามและน่ากลัว')
  })

  it("should change f;'0yomiN:jvosohkvp^j.og'k,nf to ดวงจันทร์ซ่อนหน้าอยู่ในเงามืด", () => {
    var text = "f;'0yomiN:jvosohkvp^j.og'k,nf"
    var formatted = toThai(text)
    expect(formatted).toEqual('ดวงจันทร์ซ่อนหน้าอยู่ในเงามืด')
  })

  it("should change Tii,=k9bmyh'lv'-v'Cyo,u8;k,mi'0eij;,dyo to ธรรมชาติทั้งสองของฉันมีความทรงจำร่วมกัน", () => {
    var text = "Tii,=k9bmyh'lv'-v'Cyo,u8;k,mi'0eij;,dyo"
    var formatted = toThai(text)
    expect(formatted).toEqual('ธรรมชาติทั้งสองของฉันมีความทรงจำร่วมกัน')
  })

  it("should change 4kr9i'sohkgik=jk''f'k,0ib'q to ภาพตรงหน้าเราช่างงดงามจริงๆ", () => {
    var text = "4kr9i'sohkgik=jk''f'k,0ib'q"
    var formatted = toThai(text)
    expect(formatted).toEqual('ภาพตรงหน้าเราช่างงดงามจริงๆ')
  })
})
