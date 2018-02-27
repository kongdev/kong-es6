import Base from './base'

class Service extends Base {
  
  constructor() {
    super()
    this.foo = 15
    this.test = this.test.bind(this)
    this.methodA = this.methodA.bind(this);
    
  }
  
  test(a, b) {
        return a + b
  }
  
  methodA(){
    
  }
  
  methodB(){
  
  }
  
  methodC(){
    console.log(this.test(1, 2))
  }
  
}


export default Service
