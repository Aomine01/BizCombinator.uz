"use client";

import { Component, ReactNode } from "react";

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

/**
 * Error Boundary for Globe3D WebGL context
 * Catches WebGL crashes and renders a fallback
 */
export class Globe3DErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: any) {
        console.error("Globe3D WebGL Error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Fallback UI when WebGL crashes
            return this.props.fallback || (
                <div className="w-full h-full max-w-[600px] max-h-[600px] flex items-center justify-center">
                    <div className="text-center text-slate-400">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                            <div className="w-16 h-16 rounded-full bg-primary/20" />
                        </div>
                        {/* Intentionally no default text here — callers should provide a localized fallback. */}
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
