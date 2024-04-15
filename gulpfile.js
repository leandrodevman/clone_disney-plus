const gulp = require('gulp');  
// importando o gulp
const sass = require('gulp-sass')(require('sass'));
// importando sass e o gulp-sass

function styles() {
    return gulp.src('./src/styles/*.scss')
    // recuperando os arquivos fonte de estilos (asterisco para selecionar todos os arquivos .scss)
        .pipe(sass({ outputStyle: 'compressed' }))
        // o estilo de saída dos arquivos é comprimido
        .pipe(gulp.dest('./dist/css'));
        // pasta de destino dos arquivos comprimidos
}

exports.default = styles;
// função padrão para rodar os arquivos
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles));
}
// para observar e atualizar as mudanças de forma paralela