import { LightningElement,api } from 'lwc';

export default class P2cParentComponent extends LightningElement 
{
carouselData=
       [
        {
                    src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
                    header :"First Card",
                    description : "First card description."
        },
        {
                    src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
                    header :"First Card",
                    description : "First card description."
        },
        {
                     src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
                     header :"First Card",
                     description : "First card description."
        },
    ]
}