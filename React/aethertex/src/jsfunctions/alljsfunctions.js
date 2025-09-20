import axios from "axios";
const apilink="http://localhost:3000/AeatherAPI/";

export async function getAllProducts()
{
    const res=await axios.get(apilink+"products");
    return res.data;
}

export async function getAllAddresses()
{
    const res=await axios.get(apilink+"address/{id}");
    return res.data;
}

export async function getAllOrders()
{
    const res=await axios.get(apilink+"orders");
    return res.data;
}

export async function getNewAddress(clientId,line1,line2,City,region,postalCode)
{
    const newadressobj={ClientId:clientId,
                    Line1:line1,
                    Line2:line2,
                    City:City,
                    Region:region,
                    PostalCode:postalCode}

    const res=await axios.post(apilink+"address",newadressobj);
    return res.data;
}

export async function updateAddress(clientId,line1,line2,City,region,postalCode)
{
    const adressobj={ClientId:clientId,
                    Line1:line1,
                    Line2:line2,
                    City:City,
                    Region:region,
                    PostalCode:postalCode}

    const res=await axios.put(apilink+"address",adressobj);
    return res.data;
}

/*export async function getOrders()
{
    const res=await axios.get(apilink);
    return res.data;
}

export async function UpdateUser(RequestBody)
{
    const res=await axios.PUT(apilink+"update/{id}",RequestBody);
    return res.data;
}*/


export async function GetProducts()
{
    const res=get(apilink+"products");
    return res.data;
}


export async function GetProductbyID()
{
    const res=axios.get(apilink+"products/{id}");
    return (await res).data;
}
