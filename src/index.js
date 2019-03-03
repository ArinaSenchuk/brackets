module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) {
        return false;
    }
    else {
        var stack =[];

        const stroke = str.split('');
        const len = stroke.length;

        for(var i = 0; i < len; i++) {
            for (var j = 0; j < bracketsConfig.length; j++) {
                if (stroke[i] === bracketsConfig[j][0] && stroke[i] === bracketsConfig[j][1]) {
                    if(stack.length === 0) {
                        stack.push(stroke[i]);
                        break;
                    } else {
                        el = stack.pop();
                        if (el === stroke[i]) {
                            break;
                        } else {
                            stack.push(el);
                            stack.push(stroke[i]);
                            break;
                        }
                    }
                }
                if (stroke[i] === bracketsConfig[j][0])  {
                    stack.push(stroke[i]);
                    break;
                }
                else if(stroke[i] === bracketsConfig[j][1]){
                    if (stack.length === 0) {
                        return false;
                    }
                    else {
                        el = stack.pop();
                        if (el !== bracketsConfig[j][0]) {
                            return false;

                        }
                        break;
                    }

                }
            }
        }

        return stack.length === 0;
    }
};
