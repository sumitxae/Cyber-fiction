function canvas(){
    const canvas = document.querySelector("canvas");
    const context = canvas.getContext("2d");

    canvas.width = 1920;
    canvas.height = 1080;


    window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
    });

    function files(index) {
    var data = `
    ./sequence/0001.png
    ./sequence/0002.png
    ./sequence/0003.png
    ./sequence/0004.png
    ./sequence/0005.png
    ./sequence/0006.png
    ./sequence/0007.png
    ./sequence/0008.png
    ./sequence/0009.png
    ./sequence/0010.png
    ./sequence/0011.png
    ./sequence/0012.png
    ./sequence/0013.png
    ./sequence/0014.png
    ./sequence/0015.png
    ./sequence/0016.png
    ./sequence/0017.png
    ./sequence/0018.png
    ./sequence/0019.png
    ./sequence/0020.png
    ./sequence/0021.png
    ./sequence/0022.png
    ./sequence/0023.png
    ./sequence/0024.png
    ./sequence/0025.png
    ./sequence/0026.png
    ./sequence/0027.png
    ./sequence/0028.png
    ./sequence/0029.png
    ./sequence/0030.png
    ./sequence/0031.png
    ./sequence/0032.png
    ./sequence/0033.png
    ./sequence/0034.png
    ./sequence/0035.png
    ./sequence/0036.png
    ./sequence/0037.png
    ./sequence/0038.png
    ./sequence/0039.png
    ./sequence/0040.png
    ./sequence/0041.png
    ./sequence/0042.png
    ./sequence/0043.png
    ./sequence/0044.png
    ./sequence/0045.png
    ./sequence/0046.png
    ./sequence/0047.png
    ./sequence/0048.png
    ./sequence/0049.png
    ./sequence/0050.png
    ./sequence/0051.png
    ./sequence/0052.png
    ./sequence/0053.png
    ./sequence/0054.png
    ./sequence/0055.png
    ./sequence/0056.png
    ./sequence/0057.png
    ./sequence/0058.png
    ./sequence/0059.png
    ./sequence/0060.png
    ./sequence/0061.png
    ./sequence/0062.png
    ./sequence/0063.png
    ./sequence/0064.png
    ./sequence/0065.png
    ./sequence/0066.png
    ./sequence/0067.png
    ./sequence/0068.png
    ./sequence/0069.png
    ./sequence/0070.png
    ./sequence/0071.png
    ./sequence/0072.png
    ./sequence/0073.png
    ./sequence/0074.png
    ./sequence/0075.png
    ./sequence/0076.png
    ./sequence/0077.png
    ./sequence/0078.png
    ./sequence/0079.png
    ./sequence/0080.png
    ./sequence/0081.png
    ./sequence/0082.png
    ./sequence/0083.png
    ./sequence/0084.png
    ./sequence/0085.png
    ./sequence/0086.png
    ./sequence/0087.png
    ./sequence/0088.png
    ./sequence/0089.png
    ./sequence/0090.png
    ./sequence/0091.png
    ./sequence/0092.png
    ./sequence/0093.png
    ./sequence/0094.png
    ./sequence/0095.png
    ./sequence/0096.png
    ./sequence/0097.png
    ./sequence/0098.png
    ./sequence/0099.png
    ./sequence/0100.png
    ./sequence/0101.png
    ./sequence/0102.png
    ./sequence/0103.png
    ./sequence/0104.png
    ./sequence/0105.png
    ./sequence/0106.png
    ./sequence/0107.png
    ./sequence/0108.png
    ./sequence/0109.png
    ./sequence/0110.png
    ./sequence/0111.png
    ./sequence/0112.png
    ./sequence/0113.png
    ./sequence/0114.png
    ./sequence/0115.png
    ./sequence/0116.png
    ./sequence/0117.png
    ./sequence/0118.png
    ./sequence/0119.png
    ./sequence/0120.png
    ./sequence/0121.png
    ./sequence/0122.png
    ./sequence/0123.png
    ./sequence/0124.png
    ./sequence/0125.png
    ./sequence/0126.png
    ./sequence/0127.png
    ./sequence/0128.png
    ./sequence/0129.png
    ./sequence/0130.png
    ./sequence/0131.png
    ./sequence/0132.png
    ./sequence/0133.png
    ./sequence/0134.png
    ./sequence/0135.png
    ./sequence/0136.png
    ./sequence/0137.png
    ./sequence/0138.png
    ./sequence/0139.png
    ./sequence/0140.png
    ./sequence/0141.png
    ./sequence/0142.png
    ./sequence/0143.png
    ./sequence/0144.png
    ./sequence/0145.png
    ./sequence/0146.png
    ./sequence/0147.png
    ./sequence/0148.png
    ./sequence/0149.png
    ./sequence/0150.png
    ./sequence/0151.png
    ./sequence/0152.png
    ./sequence/0153.png
    ./sequence/0154.png
    ./sequence/0155.png
    ./sequence/0156.png
    ./sequence/0157.png
    ./sequence/0158.png
    ./sequence/0159.png
    ./sequence/0160.png
    ./sequence/0161.png
    ./sequence/0162.png
    ./sequence/0163.png
    ./sequence/0164.png
    ./sequence/0165.png
    ./sequence/0166.png
    ./sequence/0167.png
    ./sequence/0168.png
    ./sequence/0169.png
    ./sequence/0170.png
    ./sequence/0171.png
    ./sequence/0172.png
    ./sequence/0173.png
    ./sequence/0174.png
    ./sequence/0175.png
    ./sequence/0176.png
    ./sequence/0177.png
    ./sequence/0178.png
    ./sequence/0179.png
    ./sequence/0180.png
    ./sequence/0181.png
    ./sequence/0182.png
    ./sequence/0183.png
    ./sequence/0184.png
    ./sequence/0185.png
    ./sequence/0186.png
    ./sequence/0187.png
    ./sequence/0188.png
    ./sequence/0189.png
    ./sequence/0190.png
    ./sequence/0191.png
    ./sequence/0192.png
    ./sequence/0193.png
    ./sequence/0194.png
    ./sequence/0195.png
    ./sequence/0196.png
    ./sequence/0197.png
    ./sequence/0198.png
    ./sequence/0199.png
    ./sequence/0200.png
    ./sequence/0201.png
    ./sequence/0202.png
    ./sequence/0203.png
    ./sequence/0204.png
    ./sequence/0205.png
    ./sequence/0206.png
    ./sequence/0207.png
    ./sequence/0208.png
    ./sequence/0209.png
    ./sequence/0210.png
    ./sequence/0211.png
    ./sequence/0212.png
    ./sequence/0213.png
    ./sequence/0214.png
    ./sequence/0215.png
    ./sequence/0216.png
    ./sequence/0217.png
    ./sequence/0218.png
    ./sequence/0219.png
    ./sequence/0220.png
    ./sequence/0221.png
    ./sequence/0222.png
    ./sequence/0223.png
    ./sequence/0224.png
    ./sequence/0225.png
    ./sequence/0226.png
    ./sequence/0227.png
    ./sequence/0228.png
    ./sequence/0229.png
    ./sequence/0230.png
    ./sequence/0231.png
    ./sequence/0232.png
    ./sequence/0233.png
    ./sequence/0234.png
    ./sequence/0235.png
    ./sequence/0236.png
    ./sequence/0237.png
    ./sequence/0238.png
    ./sequence/0239.png
    ./sequence/0240.png
    ./sequence/0241.png
    ./sequence/0242.png
    ./sequence/0243.png
    ./sequence/0244.png
    ./sequence/0245.png
    ./sequence/0246.png
    ./sequence/0247.png
    ./sequence/0248.png
    ./sequence/0249.png
    ./sequence/0250.png
    ./sequence/0251.png
    ./sequence/0252.png
    ./sequence/0253.png
    ./sequence/0254.png
    ./sequence/0255.png
    ./sequence/0256.png
    ./sequence/0257.png
    ./sequence/0258.png
    ./sequence/0259.png
    ./sequence/0260.png
    ./sequence/0261.png
    ./sequence/0262.png
    ./sequence/0263.png
    ./sequence/0264.png
    ./sequence/0265.png
    ./sequence/0266.png
    ./sequence/0267.png
    ./sequence/0268.png
    ./sequence/0269.png
    ./sequence/0270.png
    ./sequence/0271.png
    ./sequence/0272.png
    ./sequence/0273.png
    ./sequence/0274.png
    ./sequence/0275.png
    ./sequence/0276.png
    ./sequence/0277.png
    ./sequence/0278.png
    ./sequence/0279.png
    ./sequence/0280.png
    ./sequence/0281.png
    ./sequence/0282.png
    ./sequence/0283.png
    ./sequence/0284.png
    ./sequence/0285.png
    ./sequence/0286.png
    ./sequence/0287.png
    ./sequence/0288.png
    ./sequence/0289.png
    ./sequence/0290.png
    ./sequence/0291.png
    ./sequence/0292.png
    ./sequence/0293.png
    ./sequence/0294.png
    ./sequence/0295.png
    ./sequence/0296.png
    ./sequence/0297.png
    ./sequence/0298.png
    ./sequence/0299.png
    ./sequence/0300.png
    ./sequence/0301.png
    ./sequence/0302.png
    ./sequence/0303.png
    ./sequence/0304.png
    ./sequence/0305.png
    ./sequence/0306.png
    ./sequence/0307.png
    ./sequence/0308.png
    ./sequence/0309.png
    ./sequence/0310.png
    ./sequence/0311.png
    ./sequence/0312.png
    ./sequence/0313.png
    ./sequence/0314.png
    ./sequence/0315.png
    ./sequence/0316.png
    ./sequence/0317.png
    ./sequence/0318.png
    ./sequence/0319.png
    ./sequence/0320.png
    ./sequence/0321.png
    ./sequence/0322.png
    ./sequence/0323.png
    ./sequence/0324.png
    ./sequence/0325.png
    ./sequence/0326.png
    ./sequence/0327.png
    ./sequence/0328.png
    ./sequence/0329.png
    ./sequence/0330.png
    ./sequence/0331.png
    ./sequence/0332.png
    ./sequence/0333.png
    ./sequence/0334.png
    ./sequence/0335.png
    ./sequence/0336.png
    ./sequence/0337.png
    ./sequence/0338.png
    ./sequence/0339.png
    ./sequence/0340.png
    ./sequence/0341.png
    ./sequence/0342.png
    ./sequence/0343.png
    ./sequence/0344.png
    ./sequence/0345.png
    ./sequence/0346.png
    ./sequence/0347.png
    ./sequence/0348.png
    ./sequence/0349.png
    ./sequence/0350.png
    ./sequence/0351.png
    ./sequence/0352.png
    ./sequence/0353.png
    ./sequence/0354.png
    ./sequence/0355.png
    ./sequence/0356.png
    ./sequence/0357.png
    ./sequence/0358.png
    ./sequence/0359.png
    ./sequence/0360.png
    ./sequence/0361.png
    ./sequence/0362.png
    ./sequence/0363.png
    ./sequence/0364.png
    ./sequence/0365.png
    ./sequence/0366.png
    ./sequence/0367.png
    ./sequence/0368.png
    ./sequence/0369.png
    ./sequence/0370.png
    ./sequence/0371.png
    ./sequence/0372.png
    ./sequence/0373.png
    ./sequence/0374.png
    ./sequence/0375.png
    ./sequence/0376.png
    ./sequence/0377.png
    ./sequence/0378.png
    ./sequence/0379.png
    ./sequence/0380.png
    ./sequence/0381.png
    ./sequence/0382.png
    ./sequence/0383.png
    ./sequence/0384.png
    ./sequence/0385.png
    ./sequence/0386.png
    ./sequence/0387.png
    ./sequence/0388.png
    ./sequence/0389.png
    ./sequence/0390.png
    ./sequence/0391.png
    ./sequence/0392.png
    ./sequence/0393.png
    ./sequence/0394.png
    ./sequence/0395.png
    ./sequence/0396.png
    ./sequence/0397.png
    ./sequence/0398.png
    ./sequence/0399.png
    ./sequence/0400.png
    ./sequence/0401.png
    ./sequence/0402.png
    ./sequence/0403.png
    ./sequence/0404.png
    ./sequence/0405.png
    ./sequence/0406.png
    ./sequence/0407.png
    ./sequence/0408.png
    ./sequence/0409.png
    ./sequence/0410.png
    ./sequence/0411.png
    ./sequence/0412.png
    ./sequence/0413.png
    ./sequence/0414.png
    ./sequence/0415.png
    ./sequence/0416.png
    ./sequence/0417.png
    ./sequence/0418.png
    ./sequence/0419.png
    ./sequence/0420.png
    ./sequence/0421.png
    ./sequence/0422.png
    ./sequence/0423.png
    ./sequence/0424.png
    ./sequence/0425.png
    ./sequence/0426.png
    ./sequence/0427.png
    ./sequence/0428.png
    ./sequence/0429.png
    ./sequence/0430.png
    ./sequence/0431.png
    ./sequence/0432.png
    ./sequence/0433.png
    ./sequence/0434.png
    ./sequence/0435.png
    ./sequence/0436.png
    ./sequence/0437.png
    ./sequence/0438.png
    ./sequence/0439.png
    ./sequence/0440.png
    ./sequence/0441.png
    ./sequence/0442.png
    ./sequence/0443.png
    ./sequence/0444.png
    ./sequence/0445.png
    ./sequence/0446.png
    ./sequence/0447.png
    ./sequence/0448.png
    ./sequence/0449.png
    ./sequence/0450.png
    ./sequence/0451.png
    ./sequence/0452.png
    ./sequence/0453.png
    ./sequence/0454.png
    ./sequence/0455.png
    ./sequence/0456.png
    ./sequence/0457.png
    ./sequence/0458.png
    ./sequence/0459.png
    ./sequence/0460.png
    ./sequence/0461.png
    ./sequence/0462.png
    ./sequence/0463.png
    ./sequence/0464.png
    ./sequence/0465.png
    ./sequence/0466.png
    ./sequence/0467.png
    ./sequence/0468.png
    ./sequence/0469.png
    `;
    return data.split("\n")[index];
    }

    const frameCount = 469;

    const images = [];
    const imageSeq = {
    frame: 1,
    };

    for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
    }

    gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
        scrub: 0.15,
        trigger: `#page>canvas`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
    },
    onUpdate: render,
    });

    images[1].onload = render;

    function render() {
    scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
    );
    }
    ScrollTrigger.create({
        trigger: "#page>canvas",
        pin: true,
        // markers:true,
        scroller: `#main`,
        //   set start end according to preference
        start: `top top`,
        end: `600% top`,
    });
}


function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
    
}

function pagePin(){
    gsap.to("#nav", {
        scrollTrigger: {
            trigger: "#nav",
            start: "top top",
            end: "+=1500%", // Adjust the value as needed
            pin: true,
            pinSpacing: false, // Set to true if you want to maintain spacing during pinning
            scroller: "#main",
        },
    });
    
    function mintPin(){
                // Get the offset position of the "#mint" element
        const mintElement = document.querySelector("#mint");
        const mintOffset = mintElement.offsetTop;

        // Calculate the end value for the scrollTrigger based on the offset position
        const windowHeight = window.innerHeight;
        const endValue = mintOffset - windowHeight;

        // Apply the scrollTrigger with the calculated end value
        gsap.to("#mint", {
            scrollTrigger: {
                trigger: "#mint",
                start: "top top",
                end: endValue,
                pin: true,
                pinSpacing: false,
                scroller: "#main",
            },
        });

    }

    mintPin();
    gsap.to("#page1",{
        scrollTrigger:{
            trigger: "#page1",
            start: "top top",
            end: "bottom -60%",
            pin: true,
            scroller : "#main",
            // markers: true
        }
    })
    gsap.to("#page2",{
        scrollTrigger:{
            trigger: "#page2",
            start: "top top",
            end: "bottom 20%",
            pin: true,
            scroller : "#main",
            // markers: true
        }
    })
    gsap.to("#page3",{
        scrollTrigger:{
            trigger: "#page3",
            start: "top top",
            end: "bottom top",
            pin: true,
            scroller : "#main",
            // markers: true
        }
    })
}

function loaderAnim(){
    // Gsap LOader Animation
    gsap.to("#loader img",{
        rotate: 360,
        duration: 2,
        repeat: -1
    })
    gsap.to("#loader",{
        opacity: 0,
        duration: 4
    })
}

function scrollerAnim(){
    gsap.to(".elem",{
        x: "-100%",
        duration: 22,
        repeat: -1,
        ease: "none"
    })
}




locoScroll();
canvas();
pagePin();
loaderAnim();
scrollerAnim();