/**
 * Created by qulongjun on 16/1/26.
 */
var myModule=angular.module("MyModule",[]);
myModule.directive("hello",function(){
   return {
       restrict:'E',
       template:'<div>Hi Everyone</div>',
       replace:true
   }
});