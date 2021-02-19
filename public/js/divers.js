// Pjax
$(document).pjax('[data-pjax] a, a[data-pjax]', '#pjax-container');
$(document).pjax('[data-pjax-toggle] a, a[data-pjax-toggle]', '#pjax-container', { push: false});

// Loader
setTimeout(
    function() 
    {
        window.location.replace("{{ $url }}");
    }, 3000
    // Rediriger l'utilisateur vers l'endroit où il veut aller après 3 secondes
); 