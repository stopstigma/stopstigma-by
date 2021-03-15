<?php

/**
 * Template name: Main
 */

get_header('ss');
get_sidebar();

$args = [
    'posts_per_page' => 3,
    'meta_query' => array(array('key' => '_thumbnail_id'))
];
if ($posts = get_posts($args)) {
    $item = $posts[0];
}

// var_dump($posts);

?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
    <section class="content">
            <div class="first-section">
                <div class="first-section__big-baner" style="background-image: url(<?= get_the_post_thumbnail_url($item) ?>);">

                    <svg class="play-icon-hidden">
                        <use xlink:href="#play-icon"></use>
                    </svg>
                    <a href="#" class="info-block">
                        <p class="info-block__date"><?= get_the_date('d.m.Y', $item) ?></p>

                        <p class="info-block__title"><?= get_the_title($item) ?></p>

                    </a>
                </div>
                <div class="first-section__two-baner">
                    <div class="two-baner-wrapper">
                        <div class="small-baner" style="background-image: url(<?= get_the_post_thumbnail_url($item) ?>);">
                            <svg class="play-icon-hidden">
                                <use xlink:href="#play-icon"></use>
                            </svg>
                            <a href="#" class="info-block">
                                <p class="info-block__date"><?= get_the_date('d.m.Y', $item) ?></p>
                                <p class="info-block__title"><?= get_the_title($item) ?></p>
                            </a>
                        </div>
                    </div>
                    <div class="two-baner-wrapper">
                        <div class="small-baner" style="background-image: url(<?= get_the_post_thumbnail_url($item) ?>);">
                            <svg class="play-icon-hidden">
                                <use xlink:href="#play-icon"></use>
                            </svg>
                            <a href="#" class="info-block">
                                <p class="info-block__date"><?= get_the_date('d.m.Y', $item) ?></p>
                                <p class="info-block__title"><?= get_the_title($item) ?></p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div class="about-us">
                <div class="title-section">
                    Кто мы?
                </div>
                <div class="about-us__text">
                    <p>
                        StopStigma.by – инициатива, реализуемая <a href="#">ОО «Белорусская ассоциация социальных работников»</a>. Мы сообщество единомышленников, которые стремятся изменить положение вещей в отношении психических заболеваний, через повышение информированности о психическом здоровье, борьбу со стигмой в психиатрии и формирование толерантного отношения к людям, столкнувшимся с данной проблемой.
                    </p>
                    <p>
                        Мы верим, что у каждого из нас прямо сейчас есть возможность для того, чтобы сделать первый шаг в борьбе со стигматизацией, связанной с психическими расстройствами и помочь людям, испытывающим проблемы психического здоровья, выйти из изоляции, дать возможность завести друзей, работу и вести полноценную жизнь.
                    </p>
                </div>
            </div>


        </section>
      
      

    </main><!-- #main -->
</div><!-- #primary -->

<?php
get_footer('ss');

return;

// while (have_posts()) :
    // the_post();





// endwhile; // End of the loop.
