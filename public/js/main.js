$(document).ready(function(){window._token=$('meta[name="csrf-token"]').attr("content");for(var e=document.querySelectorAll(".ckeditor"),t=0;t<e.length;++t)ClassicEditor.create(e[t],{removePlugins:["ImageUpload"]});moment.updateLocale("en",{week:{dow:1}}),$(".date").datetimepicker({format:"DD/MM/YYYY",locale:"en"}),$(".datetime").datetimepicker({format:"DD/MM/YYYY HH:mm:ss",locale:"en",sideBySide:!0}),$(".timepicker").datetimepicker({format:"HH:mm:ss"}),$(".select-all").click(function(){let e=$(this).parent().siblings(".select2");e.find("option").prop("selected","selected"),e.trigger("change")}),$(".deselect-all").click(function(){let e=$(this).parent().siblings(".select2");e.find("option").prop("selected",""),e.trigger("change")}),$(".select2").select2(),$(".treeview").each(function(){var e=!1;$(this).find("li").each(function(){$(this).hasClass("active")&&(e=!0)}),e&&$(this).addClass("active")})});
