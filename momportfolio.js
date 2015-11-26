if (Meteor.isClient) {

}

if (Meteor.isServer) {

}

// the achieve page

Router.route('/work');

// the academic route

Router.route('/academic');

// the home template

Router.route('/', {
    name: 'achieve',
    template: 'achieve'
});

// the layout template

Router.configure({
    layoutTemplate: 'main',
    loadingTemplate: 'loading'
});

Router.route('/other');
