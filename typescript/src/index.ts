type Category ={
  name:string
}
type Shipment={
  status:'FREE' | 'CORREIOS' | 'PAC' | 'AMAZON'
}
type Product ={
  name:string,
  img:string,
  description:string,
  isActive:boolean,
  category:Category,
  descount:number,
  shipment:Shipment
}

const product:Product = {
  name: "teste",
  descount:20,
  img:'jjj',
  description:"description",
  isActive: true,
  category:{  //objeto
    name:"futebol"
  },
  shipment:{
    status: 'CORREIOS'
  }
}