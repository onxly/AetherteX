import axios from "axios";
const apilink="http://localhost:3000/AeatherAPI/";

//Address
export async function getAllAddress(id)
{
    const res=await axios.get(apilink+"address/client/"+id);
    return res.data;
}

export async function getAddress(id)
{
    const res=await axios.get(apilink+"address"+id);
    return res.data;
}

export async function createAddress(ClientId,Line1,Line2,City,Region,PostalCode)
{
    const newadressobj={
                    clientId:ClientId,
                    line1:Line1,
                    line2:Line2,    
                    city:City,
                    region:Region,
                    postalCode:PostalCode};
                    
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

export async function deleteAddress(clientId,addressId)
{
    const res=await axios.delete(apilink+"address/"+clientId+"/"+addressId);
    return res.data;
}


//cart
export async function getUserCart(id)
{
    const res=await axios.get(apilink+"cart/"+id);
    return res.data;
}

export async function addProduct2Cart (ProductId,Quantity,Id)
{
    const newadressobj={productId:ProductId,
                    quantity:Quantity}

    const res=await axios.post(apilink+"cart/"+Id,newadressobj);
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
    const res=await axios.delete(apilink+"cart/clear"+ID,cartdata);
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

    const res=await axios.put(apilink+"orders",orderdet);
    return res.data;
}

export async function getOrderByDate(firstDate,lastDate)
{
    const date={StartDate:firstDate, 
                EndDate:lastDate} 

    const res=await axios.post(apilink+"orders/bydate",date);
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

/* Title { get; set; }
            public string? Image1 { get; set; }
            public string? Image2 { get; set; }
            public string? Image3 { get; set; }
            public string? Image4 { get; set; }
            public string? Description { get; set; }
            public decimal? Price { get; set; }
            public string? Motherboard { get; set; }
            public string? Case { get; set; }
            public string? PowerSupply { get; set; }
            public int? CpuId { get; set; }
            public int? GpuId { get; set; }
            public int? RamId { get; set; }
            public int? StorageId { get; set; }
            public int? IsActive { get; set; }
            public int? Stock { get; set; }*/

export async function updateProduct(id,Image1,Image2,Image3,Image4,Description,Price,Title,Motherboard,Case,PowerSupply,CpuId,GpuId,RamId,StorageId,IsActive,Stock)
{
    const reqproduct={image1:Image1,
                        image2:Image2,
                        image3:Image3,
                        image4:Image4,
                        description:Description,
                        price:Price, 
                        title:Title,
                        motherboard:Motherboard,
                        case:Case,
                        powerSupply:PowerSupply,
                        cpuId:CpuId,
                        gpuId:GpuId,
                        ramId:RamId,
                        storageId:StorageId,
                        isActive:IsActive,
                        stock:Stock}
                    console.log("Update: ",JSON.stringify(reqproduct));
    const res=await axios.put(apilink+"products/"+id,reqproduct);
    return res.data;
}

export async function DeleteProduct(id)
{
    //const reqproduct={  status:Status, 
    // message:Message}
    const res=await axios.delete(apilink+"products/"+id);
    return res.data;
}
export async function GetSummary(id)
{
    const res  = await axios.get(apilink+"products/summary/"+id);
    console.log(res);
    return res.data;
}
export async function GetCPUSummary(id)
{
    const res  = await axios.get(apilink+"components/summary/cpu/"+id);
    console.log(res);
    return res.data;
}

//Ratings
export async function GetRatingsforProduct (id)
{
    const res=await axios.get(apilink+"ratings/"+id);
    return res.data;
}


export async function AddRatingforProduct(Id,Productid,Stars,Review)
{
    const reqproduct={  stars:Stars, 
                        review:Review,
                        userId:Id,
                        productid:Productid};
    console.log(JSON.stringify(reqproduct));
    const res=await axios.post(apilink+"ratings",reqproduct);
    return res.data;
}

export async function AvarageRatingforProduct(id)
{
    const res=await axios.get(apilink+"ratings/average/"+id);
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
///////////////////////////////
export async function getTotalSales(startDate, endDate) {
  try {
    const res = await axios.get(
      `${apilink}reports/sales/${startDate}/${endDate}`
    );
    return res.data; // decimal
  } catch (err) {
    console.error("Error fetching total sales:", err);
    return null;
  }
}
export async function getTopNProducts(n) {
  try {
    const res = await axios.get(`${apilink}reports/top-products/${n}`);
    return res.data; // list of {ProductId, SalesCount}
  } catch (err) {
    console.error("Error fetching top products:", err);
    return [];
  }
}
export async function getInventoryStatus() {
  try {
    const res = await axios.get(`${apilink}reports/inventory`);
    return res.data; // list of {ProductId, Title, Stock, IsActive}
  } catch (err) {
    console.error("Error fetching inventory status:", err);
    return [];
  }
}
export async function getSoldProductsCount() {
  try {
    const res = await axios.get(`${apilink}reports/sold`);
    return res.data; // integer
  } catch (err) {
    console.error("Error fetching sold products count:", err);
    return 0;
  }
}
export async function getAverageSpending() {
  try {
    const res = await axios.get(`${apilink}reports/average-spending`);
    return res.data; // decimal
  } catch (err) {
    console.error("Error fetching average spending:", err);
    return 0;
  }
}
export async function getNewRegistrations(startDate, endDate) {
  try {
    const res = await axios.get(
      `${apilink}reports/registers/${startDate}/${endDate}`
    );
    return res.data; // integer
  } catch (err) {
    console.error("Error fetching new registrations:", err);
    return 0;
  }
}
export async function getAllRegistrations() {
  try {
    const res = await axios.get(`${apilink}reports/registers`);
    return res.data; // list of {Email, CreatedAt}
  } catch (err) {
    console.error("Error fetching all registrations:", err);
    return [];
  }
}