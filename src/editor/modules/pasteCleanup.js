export default function(obj) {
    obj = obj.replace(
        /<(\/)*(\\?xml:|body|html|meta|link|h1|h2|h3|h4|h5|h6|span|font|del|ins|st1:|[ovwxp]:)((.|\s)*?)>/gi,
        ""
    ); // Unwanted tags
    obj = obj.replace(
        /(class|style|type|start| class| style|dir| dir|id| id)=("(.*?)"|(\w*))/gi,
        ""
    ); // Unwanted attributes
    obj = obj.replace(/<style(.*?)style>/gi, ""); // Style tags
    obj = obj.replace(/<script(.*?)script>/gi, ""); // Script tags
    obj = obj.replace(/<!--(.*?)-->/gi, ""); // HTML comments
    obj = obj.replace(/<[^/>br]+><\/[^>]+>/gi, ""); // Empty tags
    obj = obj.replace(/<[\S]+>&nbsp;<\/[\S]+>/gi, ""); // Empty tags with &nbsp;
    obj = obj.replace(/<[^/>]+><br><\/[^>]+>/gi, ""); // Empty tags with <br>
    return obj;
}
