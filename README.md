# Pre-entrega 2 \_ Klas Dylan

###### Manual de la página

1. La idea es que al entrar a la página se vea el mensaje de bienvenida y todos los productos. En cada producto hay un boton de detalle, que si se abre va a aparecer una nueva página con el detalle de ese producto, con una imagen mucho más grande, una descripción y al costado un boton de comprar. Y abajo de esa página va a aparecer, "También te podría interesar", y los otros modelos.

1. En el NavBar, al apretar "categoría" aparece un listado con las 4 categorías disponibles, y al apretar la que que el usuario quiera, le aparecerán los 2 relojes de esa categoría.

1. Al apretar el logo el usuario vuelve a la página de inicio.

**En el futuro**:

Al apretar comprar, se agrega el producto al carrito. Y al apretar el carrito aparece un nuevo sitio con los productos del carrito.

_Aclaración:_

En vez de utilizar ItemDetailContainer para crear una página igual a ItemListContainer pero con la descripción, se utiliza el boton de Detalle para llevar a otro sitio "ItemDetail" distinto donde solo se ve el item seleccionado en grande para que el usuario pueda visualizar el producto mejor.

_Se sigue trabajando en:_

1. En el navbar, al apretar el logo no vá aún a la página principal. No toma el click. Pero si escribimos 'http://localhost:5175/' sí funciona.
1. Lo mismo ocurre en CartWidget. Si apretamos el texto del navBar aún no lleva a ningun lado. Pero si escribimos 'http://localhost:5175/cart' sí funciona.
1. Al apretar el boton Detalle, nos lleva a otra página con el detalle de ese producto - como se quiere lograr - pero aún no está diseñado porque no le llegan los parámetros.

**Sin embargo**
Los demas links funcionan bien, es decir Categorías funciona tanto desde el navbar como modificando manualmente la url. Y se muestra lo que se quiere mostrar. Ya faltan pocas mejoras pero prefiero entregar en este momento para que no se pase el tiempo de la CoderBeca.

**Tema Gif**
Está subido un video explicativo en la carpeta /gif. No es formato gif porque no me lo está convirtiendo. Estoy usando el sitio https://ezgif.com/video-to-gif.

Muchas Gracias!!
