module.exports = {
    build: {
        options: {
            style: 'expanded'
        },
        files: {
            '<%= files.css.main.out %>': ['<%= files.css.main.src %>'],
            '<%= files.css.bootstrap.out %>': ['<%= files.css.bootstrap.src %>']
        }
    }
};
