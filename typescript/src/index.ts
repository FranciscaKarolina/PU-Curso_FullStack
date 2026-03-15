interface Product{
  name:string,
  price:number,
  description:string,
  isActive:boolean,
}
interface Product{
  category:string
}

type ProductType ={
  name:string,
  price:number,
  description:string,
  isActive:boolean
}


const product:Product = {
  name: "teste",
  price: 20.2,
  description:"description",
  isActive: true,
  category:"futebol"
};

product.price