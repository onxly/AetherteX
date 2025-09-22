import axios from "axios";
const apilink="http://localhost:3000/AeatherAPI/";

//Address
export async function getAllAddress(id)
{
    const res=await axios.get(apilink+"client/"+id);
    return res.data;
}

export async function getAddress(id)
{
    const res=await axios.post(apilink+"address/"+id);
    return res.data;
}

export async function createAddress(clientId,line1,line2,city,region,postalCode)
{
    const newadressobj={ClientId:clientId,
                    Line1:line1,
                    Line2:line2,    
                    City:city,
                    Region:region,
                    PostalCode:postalCode}

    const res=await axios.post(apilink+"address",newadressobj);
    return res.data;
}


export async function updateAddress(clientId,line1,line2,City,region,postalCode)
{
    const adressobj={ClientId:clientId,
                    Line1:line1,
                    City:City,
                    Region:region,
                    PostalCode:postalCode}

    const res=await axios.put(apilink+"address",adressobj);
    return res.data;
}

//cart
export async function getUserCart(id)
{
    const res=await axios.post(apilink+"cart/"+id);
    return res.data;
}

export async function addProduct2Cart (ProductId,Quantity)
{
    const newadressobj={productId:ProductId,
                    quantity:Quantity}

    const res=await axios.post(apilink+"address",newadressobj);
    return res.data;
}


export async function removeProdfromCart(id,Quant)
{
    const proddata={
        ProductId:id,
        Quantity:Quant
    }
    const res=await axios.delete(apilink+"cart/"+id,proddata);
    return res.data;
}

export async function ClearCart (Id)
{
    const cartdata={
        UserId:Id
    }
    const res=await axios.delete(apilink+"cart/clear",cartdata);
    return res.data;
}

//components 

export async function getAllCPUs()
{
    const res = await axios.get(apilink+"components/cpu");
    return res.data;
}

export async function GetCPU(CPU_id)
{
    const res = await axios.get(apilink+"components/cpu/"+CPU_id);
    return res.data;
}

export async function getAllGPUs()
{
    const res = await axios.get(apilink+"components/gpu");
    return res.data;
}

export async function GetGPU(GPU_id)
{
    const res = await axios.get(apilink+"components/gpu/"+GPU_id);
    return res.data;
}

export async function getAllRAMs()
{
    const res = await axios.get(apilink+"components/ram");
    return res.data;
}

export async function GetRAM(RAM_id)
{
    const res = await axios.get(apilink+"components/ram/"+RAM_id);
    return res.data;
}

export async function getAllStorageDevices()
{
    const res = await axios.get(apilink+"components/storage");
    return res.data;
}

export async function GetStorage(Storage_id)
{
    const res = await axios.get(apilink+"components/storage/"+Storage_id);
    return res.data;
}

//orders
export async function getAllOrders(id)
{
    const clientid={clientid:id};
    const res=await axios.post(apilink+"orders",clientid);
    return res.data;
}

export async function getSpecificrder(id)
{
    const res=await axios.get(apilink+"orders/"+id);
    return res.data;
}

export async function  createNewOrder(id,ClientId,AddressId,Instructions,Purchases)
{
    const orderdet={ 
                    clientId: ClientId, 
                    addressId: AddressId, 
                    instructions: Instructions, 
                    purchases: Purchases}

    const res=await axios.put(apilink+"orders/"+id,orderdet);
    return res.data;
}

export async function getOrderByDate(firstDate,lastDate)
{
    const date={StartDate:firstDate, 
                EndDate:lastDate} 

    const res=await axios.get(apilink+"orders/bydate",date);
    return res.data;
}

//Product
export async function getAllProducts()
{
    const res=await axios.get(apilink+"products");
    return res.data;
}

export async function GetProductbyID(id)
{
    const res=await axios.get(apilink+"products/"+id);
    return res.data;
}

export async function addProduct(Title,Image1,Image2,Image3,Image4,Description,Price,Motherboard,Case,PowerSupply,CpuId,GpuId,RamId,StorageId,IsActive,Stock)
{
    const reqproduct={  title: Title, 
                        image1: Image1, 
                        image2: Image2, 
                        image3: Image3, 
                        image4: Image4, 
                        description: Description, 
                        price: Price, 
                        motherboard: Motherboard, 
                        case: Case, 
                        powerSupply: PowerSupply, 
                        cpuId: CpuId, 
                        gpuId: GpuId, 
                        ramId: RamId, 
                        storageId: StorageId, 
                        isActive: IsActive, 
                        stock: Stock}
    const res=await axios.post(apilink+"products",reqproduct);
    return res.data;
}

export async function updateProduct(id,Title,Price,Stock)
{
    const reqproduct={  title:Title, 
                        price:Price, 
                        stock:Stock}
    const res=await axios.put(apilink+"products/"+id);
    return res.data;
}

export async function DeleteProduct(id,Status,Message)
{
    const reqproduct={  status:Status, 
                        message:Message}
    const res=await axios.delete(apilink+"products/"+id);
    return res.data;
}

//Ratings
export async function GetRatingsforProduct (id)
{
    const res=await axios.get(apilink+"ratings/"+id);
    return res.data;
}

export async function AddRatingforProduct(id,status,data)
{
    const reqproduct={  status:Stars, 
                        data:Data}
    const res=await axios.post(apilink+"ratings/average"+id);
    return res.data;
}

//Wishlist

export async function getWishlistforUser(id)
{
    const res=await axios.get(apilink+"wishlist"+id);
    return res.data;
}

export async function  AddProductWishlist(UserId,ProductId)
{
    const reqproduct={  userId:UserId, 
                        productId:ProductId}
    const res=await axios.post(apilink+"wishlist");
    return res.data;
}

export async function removeProductfromWishlist(id,UserId,ProductId)
{
    const reqproduct={  userId:UserId, 
                        productId:ProductId}
    const res=await axios.delete(apilink+"wishlist");
    return res.data;
}