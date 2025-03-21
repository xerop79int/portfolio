"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { Fade, Flex, ToggleButton } from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'
import { person, home, about, blog, work } from '@/app/resources/content';

export const Header = () => {
    const pathname = usePathname() ?? '';

    return (
        <>
            <Fade hide="s" fillWidth position="fixed" height="80" zIndex={9}/>
            <Fade show="s" fillWidth position="fixed" bottom="0" to="top" height="80" zIndex={9}/>
            <Flex
                fitHeight
                className={styles.position}
                as="header"
                zIndex={9}
                fillWidth padding="8"
                justifyContent="center">
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    { display.location && (
                        <Flex hide="s">
                            {person.location}
                        </Flex>
                    )}
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium"  radius="m-4" shadow="l"
                        padding="4"
                        justifyContent="center">
                        <Flex
                            gap="4"
                            textVariant="body-default-s">
                            { routes['/'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="home"
                                        href="/"
                                        label={home.label}
                                        selected={pathname === "/"}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="home"
                                        href="/"
                                        selected={pathname === "/"}/>
                                </>
                            )}
                            { routes['/about'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="person"
                                        href="/about"
                                        label={about.label}
                                        selected={pathname === "/about"}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="person"
                                        href="/about"
                                        selected={pathname === "/about"}/>
                                </>
                            )}
                            { routes['/work'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="grid"
                                        href="/work"
                                        label={work.label}
                                        selected={pathname.startsWith('/work')}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="grid"
                                        href="/work"
                                        selected={pathname.startsWith('/work')}/>
                                </>
                            )}
                            { routes['/blog'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="book"
                                        href="/blog"
                                        label={blog.label}
                                        selected={pathname.startsWith('/blog')}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="book"
                                        href="/blog"
                                        selected={pathname.startsWith('/blog')}/>
                                </>
                            )}
                            {/* { routes['/gallery'] && (
                                <>
                                    <ToggleButton
                                        className="s-flex-hide"
                                        prefixIcon="gallery"
                                        href="/gallery"
                                        label={gallery.label}
                                        selected={pathname.startsWith('/gallery')}/>
                                    <ToggleButton
                                        className="s-flex-show"
                                        prefixIcon="gallery"
                                        href="/gallery"
                                        selected={pathname.startsWith('/gallery')}/>
                                </>
                            )} */}
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}