/**
 * Created by lovering on 16/9/30.
 */

(function () {

    var typeObj = {

        tap:            true,
        doubleTap:      true,
        swiperLeft:     true,
        swiperRight:    true,
        swiperTop:      true,
        swiperBottom:   true

    }

    var fnObj = {

        tap : function (callback,e) {
            //这里写判断条件

            if (callback){
                callback(e);
            }


        },

        doubleTap : function (callback,e) {

                this._tapNum++;

                var that = this;

                if (!this._timer){

                    this._timer = setTimeout(function () {

                        if (!that._isMove){


                            if (that._tapNum == 2){
                                //说明双击了

                                if (callback){
                                    callback(e);
                                }

                            }else if (that._tapNum == 1){

                                fnObj.tap.call(that,that._types["tap"],e);

                            }


                        }


                        that._tapNum = 0;

                        clearTimeout(that._timer);

                        that._timer = null;

                        that._isMove = false;

                    },300);

                    // console.log(that._timer);

                }



        },

        swiperLeft : function (callback,e) {
            
            if (this._endTouch.pageX - this._startTouch.pageX < - 40 && Math.abs(this._endTouch.pageY - this._startTouch.pageY) < 20){

                this._isMove = true;

                if (callback){
                    callback(e);
                }
                
            }
        },

        swiperRight : function (callback,e) {


            // if (条件满足){
            //
            //     if (callback){
            //         callback(e);
            //     }
            // }
        },

        swiperTop : function (callback,e) {


            // if (条件满足){
            //
            //     if (callback){
            //         callback(e);
            //     }
            // }
        },

        swiperBottom : function (callback,e) {


            // if (条件满足){
            //
            //     if (callback){
            //         callback(e);
            //     }
            // }
        }


    }
    
    HTMLElement.prototype.addEventListener = function (touchType,callback) {


        if (typeObj[touchType]){

            if (!this._isBind){

                this._isBind = true;

                this._types = {};

                this._tapNum = 0;

                this._types[touchType] = callback;

                EventTarget.prototype.addEventListener.call(this,"touchstart",function (e) {

                    this._startTouch = e.changedTouches[0];

                    // console.log("start");

                });

                EventTarget.prototype.addEventListener.call(this,"touchmove",function (e) {

                    // console.log("move");

                });

                EventTarget.prototype.addEventListener.call(this,"touchend",function (e) {

                    // console.log("end");

                    this._endTouch = e.changedTouches[0];

                    // fnObj.tap.call(this);
                    // fnObj.doubleTap.call(this);
                    // fnObj.swiperLeft.call(this);
                    // .......

                    for (type in typeObj){

                        if (type != "tap"){
                            
                            fnObj[type].call(this,this._types[type],e);
                        }

                    }

                    // if (doubleTap 条件成立){
                    //
                    //
                    //     var fn = this._types["doubleTap"];
                    //
                    //     if (fn){
                    //         fn();
                    //     }
                    //
                    //     // fn ? fn() : null;
                    //     //
                    //     // fn && fn();
                    //
                    // }else if (tap的条件成立){
                    //
                    //     this._types["tap"]();
                    //
                    // }else if(swiperLeft 条件是否成立){
                    //
                    //     this._types["swiperLeft"]();
                    // }


                });



            }else {

                this._types[touchType] = callback;

            }




        }else {

            EventTarget.prototype.addEventListener.call(this,touchType,callback);

        }

        
    }
    
    
    
    HTMLElement.prototype.removeEventListener = function (touchType,callback) {
        
        if (typeObj[touchType]){

            if (this._types[touchType]){
                
                delete this._types[touchType];

            }
            
            
        }else {
            
            EventTarget.prototype.removeEventListener.call(this,touchType,callback);
            
        }
        
    }
    
    
    
})()