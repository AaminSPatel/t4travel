
                   const slide = document.querySelectorAll('.slide');
                   //const navi = document.querySelectorAll('.nevi');
                      // setInterval(righ,3000);
                           var i = 0;  console.log(navi[i]);

                       function left(){         
                       console.log('Left');
                      
                      
                        if(i==0){ 
                        slide[0].classList.add('b');
                        slide[1].classList.add('c');
                        slide[2].classList.add('d');
                        slide[3].classList.add('e');
                        slide[4].classList.add('a');
                        slide[0].classList.remove('a');
                        slide[1].classList.remove('b');
                        slide[2].classList.remove('c');
                        slide[3].classList.remove('d');
                        slide[4].classList.remove('e');
                        
                        
                       // navi[1].classList.add('active');

                        i=1;

                        }
                        else if(i==1){
                        slide[0].classList.add('c');
                        slide[1].classList.add('d');
                        slide[2].classList.add('e');
                        slide[3].classList.add('a');
                        slide[4].classList.add('b');
                        slide[0].classList.remove('b');
                        slide[1].classList.remove('c');
                        slide[2].classList.remove('d');
                        slide[3].classList.remove('e');
                        slide[4].classList.remove('a');
                       // navi[0].classList.add('active');
                        i=2;

                        }
                        else if(i==2){
                        slide[0].classList.add('d');
                        slide[1].classList.add('e');
                        slide[2].classList.add('a');
                        slide[3].classList.add('b');
                        slide[4].classList.add('c');
                        slide[0].classList.remove('c');
                        slide[1].classList.remove('d');
                        slide[2].classList.remove('e');
                        slide[3].classList.remove('a');
                        slide[4].classList.remove('b');
                       // navi[4].classList.add('active');
                        i=3;

                        }
                        else if(i==3){
                        slide[0].classList.add('e');
                        slide[1].classList.add('a');
                        slide[2].classList.add('b');
                        slide[3].classList.add('c');
                        slide[4].classList.add('d');
                        slide[0].classList.remove('d');
                        slide[1].classList.remove('e');
                        slide[2].classList.remove('a');
                        slide[3].classList.remove('b');
                        slide[4].classList.remove('c');
                        i=4;
                       // navi[3].classList.add('active');
                        
                        }
                        else {
                            if(i==4){
                        slide[0].classList.add('a');
                        slide[1].classList.add('b');
                        slide[2].classList.add('c');
                        slide[3].classList.add('d');
                        slide[4].classList.add('e');
                        slide[0].classList.remove('e');
                        slide[1].classList.remove('a');
                        slide[2].classList.remove('b');
                        slide[3].classList.remove('c');
                        slide[4].classList.remove('d');
                        i=0;
                        //navi[2].classList.add('active');
                            }
                            else{
                                i=0;
                            }
                        }
                        
                       
                    }
                function right(){
                    console.log('Right');
                    

                   
                        if(i==0){ 
                        slide[0].classList.add('e');
                        slide[1].classList.add('a');
                        slide[2].classList.add('b');
                        slide[3].classList.add('c');
                        slide[4].classList.add('d');
                        slide[0].classList.remove('a');
                        slide[1].classList.remove('b');
                        slide[2].classList.remove('c');
                        slide[3].classList.remove('d');
                        slide[4].classList.remove('e');
                        i=4;
                        //navi[3].classList.add('active');
                        }
                        else if(i==4){
                        slide[0].classList.add('d');
                        slide[1].classList.add('e');
                        slide[2].classList.add('a');
                        slide[3].classList.add('b');
                        slide[4].classList.add('c');
                        slide[0].classList.remove('e');
                        slide[1].classList.remove('a');
                        slide[2].classList.remove('b');
                        slide[3].classList.remove('c');
                        slide[4].classList.remove('d');
                        i=3;
                       // navi[4].classList.add('active');

                        }
                        else if(i==3){
                        slide[0].classList.add('c');
                        slide[1].classList.add('d');
                        slide[2].classList.add('e');
                        slide[3].classList.add('a');
                        slide[4].classList.add('b');
                        slide[0].classList.remove('d');
                        slide[1].classList.remove('e');
                        slide[2].classList.remove('a');
                        slide[3].classList.remove('b');
                        slide[4].classList.remove('c');
                        i=2;
                       // navi[0].classList.add('active');
                        }
                        else if(i==2){
                        slide[0].classList.add('b');
                        slide[1].classList.add('c');
                        slide[2].classList.add('d');
                        slide[3].classList.add('e');
                        slide[4].classList.add('a');
                        slide[0].classList.remove('c');
                        slide[1].classList.remove('d');
                        slide[2].classList.remove('e');
                        slide[3].classList.remove('a');
                        slide[4].classList.remove('b');
                        i=1;
                        //navi[1].classList.add('active');
                        }
                        else {
                            if(i==1){
                        slide[0].classList.add('a');
                        slide[1].classList.add('b');
                        slide[2].classList.add('c');
                        slide[3].classList.add('d');
                        slide[4].classList.add('e');
                        slide[0].classList.remove('b');
                        slide[1].classList.remove('c');
                        slide[2].classList.remove('d');
                        slide[3].classList.remove('e');
                        slide[4].classList.remove('a');
                        i=0;
                       // navi[2].classList.add('active');
                            }
                            else{
                                i=0;
                            }
                                                   
                    }
                   
                }
              