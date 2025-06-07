import { useAuth } from "@clerk/clerk-expo";
import { useRouter, useSegments } from "expo-router";
import { useEffect } from "react";
import { Stack } from "expo-router";

export default function InitialLayout() {
    const { isLoaded, isSignedIn } = useAuth();

    const segments = useSegments();
    const router = useRouter();

    useEffect(() => {
        if (!isLoaded) return

        const inAuthScreen = segments[0] === "(auth)";

        if (!isSignedIn && !inAuthScreen)
            // If not signed in and not in auth screen, redirect to login
            router.replace("/(auth)/login");
        else if (isSignedIn && inAuthScreen) router.replace("/(tabs)");
    }, [isLoaded, isSignedIn, segments]);

    return <Stack screenOptions={{ headerShown: false }}/>;
}