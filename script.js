<!-- Ocultar resto de menú con JavaScript -->
    <script>
      document.addEventListener('DOMContentLoaded', () => {
            const links = document.querySelectorAll('a[data-target]');

            links.forEach(link => {
                link.addEventListener('click', (event) => {
                    event.preventDefault();
                    const targetId = link.getAttribute('data-target');
                    document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
                });
            });
        });
    </script>
</body>
</html>

