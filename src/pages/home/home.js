import gsap from 'gsap'   // [import GSAP have to import in the function's js file]
import ScrollTrigger from 'gsap/ScrollTrigger'  // [import GSAP have to import in the function's js file]

function home()
{
    // console.log(gsap);   -- Check if it is okay
    gsap.registerPlugin(ScrollTrigger)
    console.log(ScrollTrigger)
}

export default home