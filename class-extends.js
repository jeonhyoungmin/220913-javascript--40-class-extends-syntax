class ParentObject {
  constructor(id, name, city) {
    this.id = id;
    this.name = name;
    this.city = city;
  }
}

let parentObjectInstance = new ParentObject('1', '이상해씨', '대전');
console.log(parentObjectInstance)

class ChildObject extends ParentObject{
  constructor(id, name, city, type){ // 부모 때문에 type 매개변수는 index 3번째가 된다.
    super(id, name, city); // 부모의 constructor() 데이터를 가져오는 특수한 함수다.
    this.type = type;
  }
}

let childObjectInstance = new ChildObject(1, '이상해씨', '대전', '풀');
console.log(childObjectInstance)