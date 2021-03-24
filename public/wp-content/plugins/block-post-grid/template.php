

<div class="first-section">
    <div class="first-section__big-baner" style="background-image: url(<?= get_the_post_thumbnail_url($posts[0]) ?>);">
        <svg class="play-icon-hidden">
            <use xlink:href="#play-icon"></use>
        </svg>
        <a href="<?= get_permalink($posts[0]) ?>" class="info-block">
            <p class="info-block__date"><?= get_the_date('d.m.Y', $posts[0]) ?></p>
            <p class="info-block__title"><?= get_the_title($posts[0]) ?></p>
        </a>
    </div>
    <div class="first-section__two-baner">
        <div class="two-baner-wrapper">
            <div class="small-baner" style="background-image: url(<?= get_the_post_thumbnail_url($posts[1]) ?>);">
                <svg class="play-icon-hidden">
                    <use xlink:href="#play-icon"></use>
                </svg>
                <a href="<?= get_permalink($posts[1]) ?>" class="info-block">
                    <p class="info-block__date"><?= get_the_date('d.m.Y', $posts[1]) ?></p>
                    <p class="info-block__title"><?= get_the_title($posts[1]) ?></p>
                </a>
            </div>
        </div>
        <div class="two-baner-wrapper">
            <div class="small-baner" style="background-image: url(<?= get_the_post_thumbnail_url($posts[2]) ?>);">
                <svg class="play-icon-hidden">
                    <use xlink:href="#play-icon"></use>
                </svg>
                <a href="<?= get_permalink($posts[2]) ?>" class="info-block">
                    <p class="info-block__date"><?= get_the_date('d.m.Y', $posts[2]) ?></p>
                    <p class="info-block__title"><?= get_the_title($posts[2]) ?></p>
                </a>
            </div>
        </div>
    </div>
</div>