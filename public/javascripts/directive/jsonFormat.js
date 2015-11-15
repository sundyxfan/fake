module.exports = function jsonFormat () {
    return {
        scope: {
            jsonFormat: '='
        },
        link: function($scope, elm) {

            function syntaxHighlight(json) {

                if (typeof json != 'string') {
                  json = JSON.stringify(json, undefined, 2);
                }
                json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>').replace(/\s/g, "&nbsp;");
                return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function(match) {
                    if (/^"/.test(match)) {
                        if (/:$/.test(match)) {
                            match = match.split('//');
                            if (match.length == 2) {
                                return '<span remark="' + match[1] + '" style="color: #97089C;">' + match[0] + '":</span>';
                            } else {
                                return '<span style="color: #97089C;">' + match[0] + '</span>';
                            }

                        } else {
                            return '<span style="color: #129C22;">' + match + '</span>';
                        }
                    } else if (/true|false/.test(match)) {
                        return '<span style="color: #0A0A80;">' + match + '</span>';
                    } else if (/null/.test(match)) {
                        return '<span style="color: #070EB1;">' + match + '</span>';
                    } else {
                        return '<span style="color: #003BF7;">' + match + '</span>';
                    }

                });
            }


            $scope.$watch('jsonFormat', function(val) {
                if (val) {
                    if (typeof val == 'string') {
                        try {
                            if (typeof val == 'object') {
                                val = [val];
                            }
                            else {
                                if (val == "") {
                                    val = "\"\"";
                                }
                                val = eval('(' + val + ')');
                            }
                        } catch (e) {
                            return elm[0].innerHTML = '<span style="color: red;">Parse error</span>';
                        }
                    }
                    elm[0].innerHTML = syntaxHighlight(val);
                }
            });

        }
    };
}