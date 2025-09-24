import { useState,useEffect } from "react";

function loyaltypoints()
{
    const { isLoggedIn, setIsLoggedIn, user, cart = [] } = useContext(AuthContext);

    const [LoyaltyPoints,setLoyaltyPoints]=useState();

    useEffect(()=>
    {
        async function setAllLoyaltyPoints() 
        {
            const res=await getLoyaltyPoints(user.id);
            setLoyaltyPoints(res);
        }

        setAllLoyaltyPoints()
    },[user.id])
    
    return(
        <>
        {LoyaltyPoints.map(loyalty => (
                        <AddressBox 
                            key={address.id} 
                            Line1={address.line1} 
                            Line2={address.line2} 
                            City={address.city} 
                            Region={address.region}
                            Postal={address.postal} 
                        />
                    ))}
        </>
    )
}
export default loyaltypoints;
