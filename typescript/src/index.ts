type Category ={
  name:string
}
type Product ={
  name:string,
  price:number,
  description:string,
  isActive:boolean,
  category:Category
}

const product:Product = {
  name: "teste",
  price: 20.2,
  description:"description",
  isActive: true,
  category:{  //objeto
    name:"futebol"
  }
}