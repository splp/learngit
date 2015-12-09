;(function(window,document,$,undefined){
        var EditField = function(ele,opt){
            this.$elem = ele;
             this.setting = $.extend({},this.defaults,opt);
                this.eachEl();
        };
    EditField.prototype = {
            defaults:{
                    'value':'default Value'
             },
        addEvent:function(el){
            var that = this;
            el.find('.span').bind('click',function(){
                console.log('click to edit');
                that.convertToEdit(el);
            })
            el.find('.cancel').bind('click',function(){
                console.log('click to cancel');
                that.cancel(el);
            });
            el.find('.save').bind('click',function(){
                console.log('click to save');
                that.save(el);
            })
        },
        createElement:function(el){
              el.html('');
               $('<span class="span">'+this.setting.value+'</span><input type="text" class="textField" value="'+this.setting.value+ '"><input type="button" value="save" class="save"><input type="button" value="cancel" class="cancel">').appendTo(el);
       return this;
        },
        save:function(el){
            this.convertToText(el);
            this.setValue(el, el.find('.textField').val());
        },
        cancel:function(el){
            this.convertToText(el);

        },
        getValue:function(el){
            return el.find('.textField').val();
        },
        setValue:function(el,vals){
            el.find('.textField').val(vals);
            el.find('.span').html(vals);
            return this;
        },
        convertToEdit:function(el){
            el.find('.textField').show();
            el.find('.save,.cancel').show();
            el.find('.span').hide();
            this.setValue(el,el.find('.span').html());
            return this;
        },
        convertToText:function(el){
            el.find('.textField').hide();
            el.find('.save,.cancel').hide();
            el.find('.span').show();
            return this;
        },
        eachEl:function(){
        var that =this;
            this.$elem.each(function(i){
                that.createElement($(this));
                that.convertToText($(this));
                that.addEvent($(this));
            });

        }
    };

    $.fn.EditText = function(opt){
        return new EditField(this,opt);
    }
})(window,document,jQuery);
$('td').EditText({value:'aaaaaaaa'});
