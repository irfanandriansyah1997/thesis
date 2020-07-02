// the semi-colon before function invocation is a safety net against concatenated
// scripts and/or other plugins which may not be closed properly.
;( function( $, window, document, undefined ) {

    "use strict";

    var pluginName = "FirebaseChat";
    var defaults = {
        projectId: '',
        messagingSenderId: '',
        storageBucket: '',
        authDomain: '',
        apiKey: '',
        databaseURL: '',
        appId: ''
    };

    // The actual plugin constructor
    function Plugin ( element, options ) {
        this.element = {
            main: $(element),
            message: $(element).find("#msg")
        };
        this.username = '';
        this.options = $.extend( {}, defaults, options );
        this.init();
    }


    var FirebaseInitial = {
        init: function() {
            firebase.initializeApp(this.options);

            this.login();
            this.watch();
            this.onKeyPress();
        },
        sendMessage: function(username, message) {
            var postData = {
                username: username,
                message: message,
                date: new Date().getTime()
            }
            var newPostKey = this.getKey('Chat');
            var updates = {
                ['/Chat/' + newPostKey]: postData
            };

            firebase
                .database()
                .ref()
                .update(updates);
        },
        getKey: function(child) {
            return firebase
                .database()
                .ref()
                .child(child)
                .push().key;
        }
    };

    var FirebaseWatcher = {
        watch: function() {
            var chatRef = firebase.database().ref('/Chat');
            chatRef.on('child_added', function(snapshot) {
                const date = snapshot.val().date;
                const message = snapshot.val().message;
                const username = snapshot.val().username;

                $('#messages').prepend(
                    '<div class="firebase-apps__messages__item-wrapper">' +
                    '    <span class="firebase-apps__messages__item-avatar">' + username.slice(0, 1) + '</span>' +
                    '    <div class="firebase-apps__messages__item">' +
                    '        <div class="firebase-apps__messages__item-top-section">' +
                    '            <h3>' + username + '</h3>' +
                    '            <h5>' +
                    '                <span class="material-icons">' +
                    '                    schedule' +
                    '                </span>' +
                    '                <span>'+ moment(date).fromNow() + '</span>' +
                    '            </h5>' +
                    '        </div>' +
                    '        <p>' + message + '</p>' +
                    '    </div>' +
                    '</div>'
                );
            });
        },
        login: function() {
            while(this.username === '' || this.username === null)  {
                var username = prompt("Please enter your name:", "User 1");
                if (username !== null || username !== "") {
                    this.username = username;
                }
            }
        }
    };


    var FirebaseDOM = {
        onKeyPress: function() {
            var username = this.username;
            var message = this.element.message;
            var validate = this.validate.bind(this);
            var sendMessage = this.sendMessage.bind(this);

            this.element.message.keypress(function(e) {
                var msg = message.val();

                if (e.which == 13 && validate()) {
                    sendMessage(username, msg);
                    message.val('');
                }
            });
        },
        validate: function() {
            var msg = this.element.message.val();

            if (this.username == '') {
                alert('Isi nama terlebih dahulu..');
                return false;
            }
            if (msg == '') {
                alert('Pesan tidakk boleh kosong');
                this.element.message.focus();
                return false;
            }

            return true;
        }
    };

    Plugin.prototype = $.extend({}, FirebaseInitial, FirebaseWatcher, FirebaseDOM);
        
    $.fn[pluginName] = function(param) {
        return this.each(function() {
            new Plugin(this, param);
        });
    };

} )( jQuery, window, document );