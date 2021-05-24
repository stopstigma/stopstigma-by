<?php

/**
 * Template name: Main
 */

get_header('ss');
get_sidebar();
?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <section class="content">
            <?php
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
            ?>
        </section>

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer('ss');
