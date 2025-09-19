import axios from "axios";
const apilink="http://localhost:3000/AeatherAPI/";

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

export async function getAddresses()
{
    const res=await axios.GET(apilink+"address/{id}");
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

    const res=await axios.POST(apilink+"address",newadressobj);
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

    const res=await axios.PUT(apilink+"address",adressobj);
    return res.data;
}

export async function GetProducts()
{
    const res=GET(apilink+"products");
    return res.data;
}


