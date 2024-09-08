import React from "react";
import MyLink from "@/components/MyLink";

export default function BottomBar() {
    return (

        <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
            <div className="grid h-16 w-full z-50 border-t  grid-cols-5 mx-auto font-medium">
                <MyLink url="/tasks" name="Задания"/>
                <MyLink url="/shop" name="Магазин"/>
                <MyLink url="/home" name="Дом"/>
                <MyLink url="/games" name="Игры"/>
                <MyLink url="/friends" name="Друзья"/>
            </div>

        </div>
    );
}
