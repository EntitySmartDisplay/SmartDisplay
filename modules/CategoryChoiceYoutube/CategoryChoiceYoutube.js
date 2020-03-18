/* global Module */

/* Magic Mirror 2
 * Module: MMM-Modulebar
 *
 * By Erik Pettersson
 * Based on the TouchNavigation Module by Brian Janssen
 *
 * MIT Licensed.
 */

//var request = require('request');
var CategoryChoiceYoutube;
Module.register("CategoryChoiceYoutube",{
	
	requiresVersion: "2.1.0",
	
    defaults: {
        // Allow the module to force modules to be shown (if hidden and locked by another module ex. profile-switcher).
        allowForce: false,
        // Determines if the border around the buttons should be shown.
        showBorder: false,
        // The minimum width for all the buttons.
        minWidth: "0px",
        // The minimum height for all the buttons.
        minHeight: "0px",
        // The location of the symbol relative to the text. Options: left, right, top or bottom
        picturePlacement: "left",
        // The direction of the bar. Options: row, column, row-reverse or column-reverse
        direction: "column",
		// The speed of the hide and show animation.
		animationSpeed: 1000,
        // The default button 1. Add your buttons in the config.
        buttons: {
										"1": {
												module: "MMM-EmbedYoutube1",
												width:"50",
												height:"50",
												text:"게임",
												img:"http://2.bp.blogspot.com/-HqSOKIIV59A/U8WP4WFW28I/AAAAAAAAT5U/qTSiV9UgvUY/s1600/icon.png",
											},
										"2": {
												module: "MMM-EmbedYoutube1",
												img:"https://image.flaticon.com/icons/svg/1628/1628000.svg",
												width:"50",
												height:"50",
												text:"뮤직비디오",
											},
										"3": {
											module: "MMM-EmbedYoutube1",
											img:"https://image.flaticon.com/icons/svg/254/254072.svg",
											width:"50",
											height:"50",
											text:"영화",
										},
										"4": {
											module: "MMM-EmbedYoutube1",
											img:"https://image.flaticon.com/icons/svg/1040/1040232.svg",
											width:"50",
											height:"50",
											text:"뉴스",
										},
										"5": {
											module: "MMM-EmbedYoutube1",
											img:"https://image.flaticon.com/icons/svg/861/861512.svg",
											width:"50",
											height:"50",
											text:"스포츠",
										},
										"6": {
											module: "MMM-EmbedYoutube1",
											img:"https://image.flaticon.com/icons/svg/135/135644.svg",
											width:"50",
											height:"50",
											text:"먹방",
										},
										"7": {
											module: "MMM-EmbedYoutube1",
											img:"https://image.flaticon.com/icons/svg/1626/1626000.svg",
											width:"50",
											height:"50",
											text:"여행",
										},
										"8": {
											module: "MMM-EmbedYoutube1",
											img:"https://image.flaticon.com/icons/svg/356/356764.svg",
											width:"50",
											height:"50",
											text:"유머",
										},
											
            }
    },
	start(){
		CategoryChoiceYoutube=this;
	},
    // Define required styles.
	getStyles: function(){
		return ["font-awesome.css", "MMM-Modulebar4.css"];
	},

    // Override dom generator.
    getDom: function() {
        var menu = document.createElement("span");
        menu.className = "modulebar-menu";
        menu.id = this.identifier + "_menu";
        menu.style.flexDirection = this.config.direction;
		// Sends each button to the "createButton" function be created.
		for (var num in this.config.buttons) {
			menu.appendChild(this.createButton(this, num, this.config.buttons[num], this.config.picturePlacement));
        }
        return menu;
    },

	// Creates the buttons.
    createButton: function (self, num, data, placement) {
		// Creates the span elemet to contain all the buttons.
		var item = document.createElement("span");
        // Builds a uniqe indentity / button.
		item.id = self.identifier + "_button_" + num;
        // Sets a class to all buttons.
		item.className = "modulebar-button";
        // Makes sure the width and height is at least the defined minimum.
		item.style.minWidth = self.config.minWidth;
        item.style.minHeight = self.config.minHeight;
		// Collects all modules loaded in MagicMirror.
		var modules = MM.getModules();
		// When a button is clicked, the module either gets hidden or shown depending on current module status.
		item.addEventListener("click", function () {
			// Lists through all modules for testing.
			for (var i = 0; i < modules.length; i++) {
				// Check if the curent module is the one.
				if (modules[i].name === data.module) {
					// Splits out the module number of the module with the same name.
					var idnr = modules[i].data.identifier.split("_");					
					// Checks if idnum is set in config.js. If it is, it only hides that module, if not hides all modules with the same name.
					if (idnr[1] == data.idnum || data.idnum == null) {
						// Check if the module is hidden.
						if (modules[i].hidden) {
							// Check if there is a "showURL" defined.
							if (data.showUrl != null) {
								// Visiting the show URL.
								fetch(data.showUrl);
								// Prints the visited hideURL.
								console.log("Visiting show URL: "+data.showUrl);
								
							}
							// add code
							
							if(num==1){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"YCcE9oGkOw8_롤");			
									} 
							else	if(num==2){
										CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"ScSn235gQx0_뮤직비디오");			
											} 
							else	if(num==3){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"wzKcDqRcIx0_영화");			
									} 
							else	if(num==4){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"L0oei9OH7Yo_뉴스");			
									}
							else	if(num==5){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"Bxg1CqqkzE0_스포츠");			
									}
							else	if(num==6){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"egyB02dbJKE_먹방");			
									}
							else	if(num==7){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"zOQ_t2dCMq0_해외여행");			
									}
							else	if(num==8){
								CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"MFWtM11WJn0_몰카");			
									}
									
							// 
							modules[i].show(self.config.animationSpeed, {force: self.config.allowForce});
							// Prints in the console what just happend (adding the ID). 
							console.log("Showing "+modules[i].name+" ID: "+idnr[1]);
						}else{
							if(num==1){
								if (modules[i].config.video_id == "YCcE9oGkOw8") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"YCcE9oGkOw8_롤");			
									} 
							else	if(num==2){
								if (modules[i].config.video_id == "ScSn235gQx0") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"ScSn235gQx0_뮤직비디오");	
											
									} 
							else	if(num==3){
								if (modules[i].config.video_id == "KUiouwhozkQ") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"KUiouwhozkQ_영화");	
											
									} 
							else	if(num==4){
								if (modules[i].config.video_id == "L0oei9OH7Yo") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"L0oei9OH7Yo_뉴스");	
											
											} 
							else	if(num==5){
								if (modules[i].config.video_id == "Bxg1CqqkzE0") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"Bxg1CqqkzE0_스포츠");	
											
											} 
							else	if(num==6){
								if (modules[i].config.video_id == "egyB02dbJKE") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"egyB02dbJKE_먹방");	
											
											} 
							else	if(num==7){
								if (modules[i].config.video_id == "Vw39vVf2HCI") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"Vw39vVf2HCI_해외여행");	
											
											} 
							else	if(num==8){
								if (modules[i].config.video_id == "MFWtM11WJn0") {
									                                console.log("modules[i].config.video_id ?"+ modules[i].config.video_id);
																	modules[i].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                                //modules[5].hide(self.config.animationSpeed, {force: self.config.allowForce});
									                            }
								else
									CategoryChoiceYoutube.sendNotification('PLAYLISTCHANGE',"MFWtM11WJn0_몰카");	
											
											} 
							// Hides the module.
							
							// Prints in the console what just happend (adding the ID). 
							console.log("Hiding "+modules[i].name+" ID: "+idnr[1]);
							// Check if there is a "hideURL" defined.
							if (data.hideUrl != null) {
								// Visiting the the URL.
								fetch(data.hideUrl);
								// Prints the visited hideURL.
								console.log("Visiting hide URL: "+data.hideUrl);
							}
						}
					}
				}
			}
		});
		// Fixes the aligning.
        item.style.flexDirection = {
            "right"  : "row-reverse",
            "left"   : "row",
            "top"    : "column",
            "bottom" : "column-reverse"
        }[placement];
		// Sets the border around the symbol/picture/text to black.
        if (!self.config.showBorder) {
            item.style.borderColor = "black";
        }
		// Adds the Font-Awesome symbol if specified.
        if (data.symbol) {
            var symbol = document.createElement("span");
            symbol.className = "modulebar-picture fa fa-" + data.symbol;
			// Sets the size on the symbol if specified.
            if (data.size) {
                symbol.className += " fa-" + data.size;
                symbol.className += data.size == 1 ? "g" : "x";
            }
			// Align the symbol with a margin.
            if (data.text && placement === "left") {
                symbol.style.marginRight = "4px";
            }
			// Adds the symbol to the item.
            item.appendChild(symbol);

		// Adds a picture if specified.
		} else if (data.img) {
            var image = document.createElement("img");
            image.className = "modulebar-picture";
            image.src = data.img;
			// Sets the size of the picture if specified.
            if (data.width)  image.width  = data.width;
            if (data.height) image.height = data.height;
			// Align the picture with a margin.
            if (data.text && placement === "left") {
                image.style.marginRight = "4px";
            }
			// Adds the picture to the item.
            item.appendChild(image);
        }
		// Adds the text if specified.
        if (data.text) {
            var text = document.createElement("span");
            text.className = "modulebar-text";
            text.innerHTML = data.text;
			// Align the text with a margin.
            if ((data.symbol || data.img) && placement === "right") {
                text.style.marginRight = "4px";
            }
			// Adds the text to the item.
            item.appendChild(text);
        }
		// All done. :)
        return item;
	},
	
	notificationReceived: function(notification, payload) {
		if(notification === 'Modules All Change'){
			this.hide()
		}
	}
	
});	


