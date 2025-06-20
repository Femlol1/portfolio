"use client";

import { useEffect } from "react";

// Simple analytics for tracking Core Web Vitals and user interactions
export const Analytics = () => {
	useEffect(() => {
		// Track Core Web Vitals
		if (typeof window !== "undefined" && "performance" in window) {
			// Largest Contentful Paint (LCP)
			const observer = new PerformanceObserver((list) => {
				const entries = list.getEntries();
				entries.forEach((entry) => {
					if (entry.entryType === "largest-contentful-paint") {
						console.log("LCP:", entry.startTime);
					}
				});
			});

			try {
				observer.observe({ entryTypes: ["largest-contentful-paint"] });
			} catch (e) {
				// Fallback for browsers that don't support this
				console.log("Performance observer not supported");
			}

			// First Input Delay (FID) - using First Input Delay polyfill concept
			const handleFirstInput = (event: Event) => {
				console.log(
					"First input delay:",
					performance.now() - (event as any).timeStamp
				);
				document.removeEventListener("click", handleFirstInput);
				document.removeEventListener("keydown", handleFirstInput);
			};

			document.addEventListener("click", handleFirstInput, { once: true });
			document.addEventListener("keydown", handleFirstInput, { once: true });

			// Cumulative Layout Shift (CLS)
			let clsValue = 0;
			const clsObserver = new PerformanceObserver((list) => {
				for (const entry of list.getEntries()) {
					if (!(entry as any).hadRecentInput) {
						clsValue += (entry as any).value;
					}
				}
				console.log("CLS:", clsValue);
			});

			try {
				clsObserver.observe({ entryTypes: ["layout-shift"] });
			} catch (e) {
				console.log("Layout shift observer not supported");
			}

			// Cleanup
			return () => {
				observer.disconnect();
				clsObserver.disconnect();
			};
		}
	}, []);

	return null; // This component doesn't render anything
};

// Hook for tracking custom events
export const useAnalytics = () => {
	const trackEvent = (eventName: string, properties?: Record<string, any>) => {
		console.log("Event tracked:", eventName, properties);

		// Here you would integrate with your analytics service
		// For example: Google Analytics, Mixpanel, etc.

		// Example for Google Analytics 4:
		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("event", eventName, properties);
		}
	};

	const trackPageView = (url: string) => {
		console.log("Page view tracked:", url);

		if (typeof window !== "undefined" && (window as any).gtag) {
			(window as any).gtag("config", "GA_MEASUREMENT_ID", {
				page_path: url,
			});
		}
	};

	return { trackEvent, trackPageView };
};
