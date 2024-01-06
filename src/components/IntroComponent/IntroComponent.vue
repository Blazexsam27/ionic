<!-- This component will be available to every page, it has navbar and resizeable height -->

<template>
    <div class="intro-section-component">
        <nav class="navbar">
            <div class="left">IONIC</div>
            <div class="right">
                <ul>
                    <li>
                        <v-icon name="la-cubes-solid" />
                        <span>Technology</span>
                    </li>
                    <li>
                        <v-icon name="si-antdesign" />
                        <span>Designs</span>
                    </li>
                    <li>
                        <v-icon name="oi-gift" />
                        <span>Bundles</span>
                    </li>
                    <li>
                        <v-icon name="fa-laptop-code" />
                        <span>Resources</span>
                    </li>
                    <li>
                        <v-icon name="ri-article-line" />
                        <span>Blogs</span>
                    </li>
                </ul>
            </div>
        </nav>

        <div class="content">
            <div class="content_left">

            </div>
            <div class="content_right">
                <div class="outer-axis">
                    <v-icon name="vi-file-type-reactjs" />
                    <v-icon id="tails" name="vi-file-type-tailwind" />
                </div>
                <div class="mid-axis">
                    <v-icon name="vi-file-type-vue" />
                </div>
                <div class="inner-axis">
                    <v-icon name="vi-file-type-angular" />
                    <v-icon id="node" name="vi-file-type-node2" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "IntroSectionComponent",
};
</script>
<style lang="scss" scoped>
.intro-section-component {
    // height: fit-content;
    background: $blue-purple-grad;
    height: 650px;
    width: 100%;

    nav {
        @include common-dflex-space-between;
        width: 100%;
        height: fit-content;
        padding: 0 3rem;
        color: $text-color-white;

        .left {
            font-size: 2.5rem;
            font-weight: bold;
        }

        .right {
            padding: 0 5rem;
            font-weight: 600;
            letter-spacing: 1.3px;

            ul {
                display: flex;
                gap: 2rem;

                li {
                    @include common-dflex-column;
                    list-style: none;
                    cursor: pointer;
                    transition: 0.5s;
                    align-items: center;

                    svg {
                        width: 30px;
                        height: 30px;
                    }

                    &:hover {
                        transition: 0.5s;
                        text-decoration: underline;
                        text-underline-offset: 4px;
                        color: $orange-red;
                    }
                }
            }
        }
    }

    .content {
        width: 100%;
        display: flex;
        align-items: center;

        margin-top: 5rem;

        svg {
            width: 85px;
            height: 85px;
        }

        .content_left {
            width: 50%;
            height: fit-content;
        }

        .content_right {
            @include dflex-justify-end;
            width: 50%;
            height: fit-content;
            position: relative;

            .outer-axis,
            .inner-axis,
            .mid-axis {
                position: relative;
                width: 350px;
                height: 350px;
                margin: 0 auto;
                border-radius: 50%;
                position: absolute;
                right: 0px;
                top: 5rem;

                svg {
                    animation: outer-circle 23s linear infinite;
                }

                #tails {
                    animation: inner-circle 25s linear infinite;
                    animation-direction: reverse;
                }
            }

            .mid-axis {
                right: 150px;
                top: 3rem;

                svg {
                    animation: mid-circle 27s linear infinite;
                    animation-direction: reverse;
                }

                #node {
                    animation: mid-circle 15s linear infinite;
                    animation-direction: reverse;
                }
            }

            .inner-axis {
                right: 30px;
                top: 7rem;

                svg {
                    animation: inner-circle 25s linear infinite;
                }
            }
        }
    }

}

@keyframes outer-circle {
    0% {
        transform: rotate(0deg) translateX(50px) rotate(0deg);
    }

    100% {
        transform: rotate(360deg) translateX(50px) rotate(-360deg);
    }
}

@keyframes mid-circle {
    0% {
        transform: rotate(0deg) translateX(120px) rotate(0deg);
    }

    100% {
        transform: rotate(360deg) translateX(120px) rotate(-360deg);
    }
}

@keyframes inner-circle {
    0% {
        transform: rotate(0deg) translateX(80px) rotate(0deg);
    }

    100% {
        transform: rotate(360deg) translateX(80px) rotate(-360deg);
    }
}
</style>
