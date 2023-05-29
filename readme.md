## PROCESO DE ELABORACIÓN DEL PARCIAL

#PASO A PASO: 
A continuación, se describen los pasos realizados para la elaboración del parcial
1.	Se empieza por la implementación de la interfaz para el login la cual se crea en un componente llamado login en la carpeta src/components

2.	Se crea un contenedor dentro del cual se crea un row en el cual estará el formulario del login.

3.	Para el formulario se utilizan estilos predefinidos de Bootstrap agregando estilos adicionales principalmente para el color de la letra y los tamaños de los textos


4.	Se realiza la implementación de la galería la cual se almacena en la carpeta src/components. En esta se toma un container al que se le asigna un row. Sin embargo, dados los tamaños de cada parte de la página, se decide un tamaño de columna col-8 para dar el ancho necesario. El detalle del libro, por tanto, se dejará en un tamaño col-4.

5.	Una vez se realiza esto se buscan los estilos requeridos para Bootstrap, sin embargo, durante la implementación de las tarjetas tuve un problema con la implementación del card horizontal al parecer por una versión distinta de Bootstrap. Realicé prueba con otro patrón el cual funcionaba, pero el error no pude corregirlo así que por cuestiones de tiempo quedó como un card-desk

6.	Se realiza la conexión con el back. Cabe aclarar que en el back se hace necesario activar el cors en el main.ts

7.	Se procede a conectar con los endpoints http://localhost:3000/books y http://localhost:3000/books/id 

8.	Esta conexión se logra mediante la implementación del useEffect() que extrae los datos de cada uno de los json mediante un fetch a la URL. 


9.	Dado que los id serán de acuerdo con cada uno de los libros seleccionados se procede a cambiar el parámetro id del segundo endpoint por ${bookId}

10.	Se implementan las funciones para que al hacer clic se muestre la información de cada libro. Esto se hace en el col-4 previamente generado. Esto se logra mediante el uso de la función onClick={()} a la cual se le pasa por parámetro la constante definida en el fetch.


11.	Posterior a esto se realiza el proceso de internacionalización el cual consiste en como primera medida implementar la carpeta locales en src/locales

12.	Esta carpeta contiene los archivos es.json y en.json


13.	En el archivo index.js se importa IntlProvider y se ubica el respectivo tag 

14.	Se implementan las características locale="es" messages= {localeEsMessages} dentro de ese <IntlProvider>. Esto lo que hará es mostrar los textos estáticos en español. Si se quisiera ver en inglés se cambiaría por locale="en" messages= {localeEnMessages}


15.	Con estas cosas ya implementadas se procede a realizar los archivos Json para inglés y español con la siguiente estructura de ejemplo para el idioma inglés
{
    "login.terms": "Privacy Policy Terms of use",
    "login.account": "Log into your account",
    "login.username": "Username",
    "login.password": "Password",
    "login.login": "Log in",
    "login.cant":"Can't log in?",
    "gallery.author": "Author: ",
    "gallery.publisher": "Publisher: ",
    "gallery.genre": "Genre: ",
    "gallery.year": "Year: ",
    "gallery.price": "Price: ",
    "gallery.summary": "Summary: "
}

16.	Ya con esto solo realizamos los cambios de los textos estáticos con <FormattedMessage id=" "/> utilizando cada una de las etiquetas definidas anteriormente.

17.	Con esto ya se tendría la aplicación terminada 😊

#DECISIONES

Dentro de las decisiones fundamentales sobresalen las mencionadas anteriormente que se asocian principalmente a errores durante la implementación durante el parcial y por las cuales se decide mostrar una vista diferente así:

1.	Login: El tamaño no se adaptó según los requerimientos por olvido y tiempo en el parcial
2.	Gallery: Los libros no se muestran de acuerdo con lo esperado por diferencia de versiones de documentación de Bootstrap con el instalado en local y dado el tiempo limitado para realizar el cambio se optó por no realizarlo y mostrar de manera diferente la galería en lugar de enviar errores de implementación.

