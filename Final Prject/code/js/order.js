var Order = function () {
    this.holder = [];
}
/*this.add_to_order = function (item) {
    this.holder.push(item);
}
this.remove = function () {
    this.holder.remove(item);
}*/
Order.prototype.add_to_order = function (item) {
    this.holder.push(item);
    console.log(this.holder.length);
}

Order.prototype.show_order = function(){
    this.order_string = "";
    if (this.holder.length == 0){
        this.order_string = "Add something to order!";
    }
    else {
        for (i = 0; i < this.holder.length; i++){
            this.order_string = this.order_string + this.holder[i].get_amount().toString() + " " + this.holder[i].get_name() + " " + this.holder[i].get_price().toString() + "<br>";
        }
    }
    return this.order_string;
}

var order = new Order();
/*class Order{
	var holder = []
	var check = "True";

	static add_item(item){
		var check = "True";
		for (var i = 0; i <= holder.length; i++) {
			if (item == holder[i]){
				holder[i].raise_amount()
				check = "False";
			}
		}

		if (check = "True"){
			holder.push(item)
		}
		

	}

	static remove_item(item){
	
		for (var i = 0; i <= holder.length; i++) {
			if (item == holder[i]){
				if (holder[i].get_amount > 1){
					holder[i].lower_amount()
				}
				else{

				}
				
			}
		}
	}

	static show_order() {
		var string = ""
	    if (this.holder[] = null){
		    string = "Add something to order!";
	    }
	    else{
   	    for (var i = 0, i < holder.length, i++){
   		    string = string + holder[i].get_amount().toString() + " " + holder[i].get_name() + " " + holder.get_price().toString() + "\n"
   	    }
   }
	return string
	}
	}
	}*/