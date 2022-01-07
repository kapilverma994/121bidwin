import {
    Home,
    Login,
    ProductDetail,
    BuyCoins,
    ElectronicMobile,
    Howitwork,
    Membership,
    Winner,
    WinnerProfile,
    Aboutus,
    Contactus,
    BidWin,
    Policy,
    Userlogin,
    RegisterUser,
    MerchantLogin
} from '../screens';

const routeKey = [
    {
        route: '/',
        component: Home,
        shouldAuthenticate: false,
    },
    {
        route: '/product-detail',
        component: ProductDetail,
        shouldAuthenticate: false,
    },
    {
        route: '/buy-coins',
        component: BuyCoins,
        shouldAuthenticate: false,
    },
    {
        route: '/login',
        component: Login,
        shouldAuthenticate: false,
    }
    ,
    {
        route: '/electronic-mobile',
        component:ElectronicMobile ,
        shouldAuthenticate: false,
    },
    {
        route: '/how-it-works',
        component:Howitwork ,
        shouldAuthenticate: false,
    },
    {
        route: '/membership',
        component:Membership ,
        shouldAuthenticate: false,
    },
    {
        route: '/winner',
        component:Winner ,
        shouldAuthenticate: false,
        
    },
    {
        route: '/winner-profile',
        component:WinnerProfile ,
        shouldAuthenticate: false,
        
    },
    {
        route: '/about-us',
        component:Aboutus ,
        shouldAuthenticate: false,
        
    }
    ,    {
        route: '/contact-us',
        component:Contactus ,
        shouldAuthenticate: false,
        
    }
    ,    {
        route: '/bid-win',
        component:BidWin,
        shouldAuthenticate: false,
        
    }
    ,    {
        route: '/privacy-policy',
        component:Policy,
        shouldAuthenticate: false,
        
    }
    ,    {
        route: '/user-login',
        component:Userlogin,
        shouldAuthenticate: false,
        
    }
    ,    {
        route: '/register-user',
        component:RegisterUser,
        shouldAuthenticate: false,
        
    }
    ,    {
        route: '/merchant-login',
        component:MerchantLogin,
        shouldAuthenticate: false,
        
    }
]

export default routeKey;