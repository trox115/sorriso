function format(state) {
    if (!state.id) return state.text; 
    return "<img class='flag' src='../img/flags/" + state.id.toLowerCase() + ".png'/> &nbsp;" + state.text;
}

var placeholder = "Select a State";
if ($("#selitemIcon").length > 0)
$("#selitemIcon").select2({
	theme: "bootstrap",
	templateResult: format,
    formatSelection: format,
    escapeMarkup: function(m) {
        return m;
    }
});




