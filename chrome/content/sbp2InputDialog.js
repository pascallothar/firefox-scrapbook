
var sbp2InputDialog = {

	accept : function()
	{
		window.arguments[0].out = document.getElementById("sbp2Textbox").value;
		return true;
	},

	init : function()
	{
		var iMode = window.arguments[0].mode;

		switch (iMode)
		{
			case "folder":
				document.getElementById("sbp2Description").value = document.getElementById("sbp2InputboxString").getString("INPUTBOX_MODE_1");
				break;
			case "tag" :
			case "edit":
				document.getElementById("sbp2Description").value = document.getElementById("sbp2InputboxString").getString("INPUTBOX_MODE_2");
				break;
		}
		if ( iMode == "edit" ) {
			document.getElementById("sbp2Textbox").setAttribute("value", window.arguments[0].out);
		}
	},

}