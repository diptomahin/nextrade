
export const fadeIn = (direction, delay) => {
     return {
          hidden:{
               y:direction === 'up' ? 40 : direction === 'down' ? -40 : 0,
               x:direction === 'left' ? 40 : direction === 'right' ? -40 : 0,

          },
          show:{
               y:0,
               x:0,
               opacity:[0,0.2,0.5,0.8,1],
               transition:{
                    type:'tween',
                    duration:0.5,
                    delay:delay,
                    ease:[0.25,0.25,0.25,0.75],
               }
          }
     }
};

