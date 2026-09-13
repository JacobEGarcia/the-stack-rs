function __wbg_get_imports() {
    const import0 = {
        __proto__: null,
        __wbg_Window_b5521e93a9b06b20: function(arg0) {
            const ret = getObject(arg0).Window;
            return addHeapObject(ret);
        },
        __wbg_Window_c7f91e3f80ae0a0e: function(arg0) {
            const ret = getObject(arg0).Window;
            return addHeapObject(ret);
        },
        __wbg_WorkerGlobalScope_2c3837cc5892cb94: function(arg0) {
            const ret = getObject(arg0).WorkerGlobalScope;
            return addHeapObject(ret);
        },
        __wbg___wbindgen_debug_string_0e68cf47c9cbd9b0: function(arg0, arg1) {
            const ret = debugString(getObject(arg1));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_is_function_fcda5e3902d732fe: function(arg0) {
            const ret = typeof(getObject(arg0)) === 'function';
            return ret;
        },
        __wbg___wbindgen_is_undefined_8c687d0b90d5b524: function(arg0) {
            const ret = getObject(arg0) === undefined;
            return ret;
        },
        __wbg___wbindgen_string_get_92ab86bb19cbc12f: function(arg0, arg1) {
            const obj = getObject(arg1);
            const ret = typeof(obj) === 'string' ? obj : undefined;
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg___wbindgen_throw_5d9e815e6fdf150f: function(arg0, arg1) {
            throw new Error(getStringFromWasm0(arg0, arg1));
        },
        __wbg__wbg_cb_unref_997e73d32238e655: function(arg0) {
            getObject(arg0)._wbg_cb_unref();
        },
        __wbg_abort_76dea11221098ae5: function(arg0) {
            getObject(arg0).abort();
        },
        __wbg_activeElement_a40cd04e4e5cfaff: function(arg0) {
            const ret = getObject(arg0).activeElement;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_addEventListener_9534e2dc12044ee4: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            getObject(arg0).addEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
        }, arguments); },
        __wbg_addListener_d7f516abc7fe0d86: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).addListener(getObject(arg1));
        }, arguments); },
        __wbg_altKey_c75bf4903a5db4c2: function(arg0) {
            const ret = getObject(arg0).altKey;
            return ret;
        },
        __wbg_altKey_fa381deee4b395cd: function(arg0) {
            const ret = getObject(arg0).altKey;
            return ret;
        },
        __wbg_animate_8f41e2f47c7d04ab: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).animate(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        },
        __wbg_appendChild_0a61ee9a9da4556f: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).appendChild(getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_arrayBuffer_06f3da76f071d37f: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).arrayBuffer();
            return addHeapObject(ret);
        }, arguments); },
        __wbg_blockSize_726f0afadf8c1f3f: function(arg0) {
            const ret = getObject(arg0).blockSize;
            return ret;
        },
        __wbg_body_7d83a19bffb260db: function(arg0) {
            const ret = getObject(arg0).body;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_brand_3bc196a43eceb8af: function(arg0, arg1) {
            const ret = getObject(arg1).brand;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_brands_b7dcf262485c3e7c: function(arg0) {
            const ret = getObject(arg0).brands;
            return addHeapObject(ret);
        },
        __wbg_button_f6aa74c65b739064: function(arg0) {
            const ret = getObject(arg0).button;
            return ret;
        },
        __wbg_buttons_fc06c2cbd043b4af: function(arg0) {
            const ret = getObject(arg0).buttons;
            return ret;
        },
        __wbg_cancelAnimationFrame_4fc0f227c45abccf: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).cancelAnimationFrame(arg1);
        }, arguments); },
        __wbg_cancelIdleCallback_0c22b316f4fd67e5: function(arg0, arg1) {
            getObject(arg0).cancelIdleCallback(arg1 >>> 0);
        },
        __wbg_cancel_65f38182e2eeac5c: function(arg0) {
            getObject(arg0).cancel();
        },
        __wbg_catch_e2134ef6dcdb69ed: function(arg0, arg1) {
            const ret = getObject(arg0).catch(getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_clearTimeout_dc6554a9312cb919: function(arg0, arg1) {
            getObject(arg0).clearTimeout(arg1);
        },
        __wbg_clipboard_e39061ae5482d3b8: function(arg0) {
            const ret = getObject(arg0).clipboard;
            return addHeapObject(ret);
        },
        __wbg_close_36187477a6c49330: function(arg0) {
            getObject(arg0).close();
        },
        __wbg_code_de6c620a1a241f59: function(arg0, arg1) {
            const ret = getObject(arg1).code;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_contains_322c48b603c87d38: function(arg0, arg1) {
            const ret = getObject(arg0).contains(getObject(arg1));
            return ret;
        },
        __wbg_contentRect_d4183dcae16ce988: function(arg0) {
            const ret = getObject(arg0).contentRect;
            return addHeapObject(ret);
        },
        __wbg_createElement_b9024dc5ba95ac27: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).createElement(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_createObjectURL_7dadebfd232e594a: function() { return handleError(function (arg0, arg1) {
            const ret = URL.createObjectURL(getObject(arg1));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_ctrlKey_785e802b8798af13: function(arg0) {
            const ret = getObject(arg0).ctrlKey;
            return ret;
        },
        __wbg_ctrlKey_ba07ac4b2ea90600: function(arg0) {
            const ret = getObject(arg0).ctrlKey;
            return ret;
        },
        __wbg_deltaMode_1f7b0a593ff1ea16: function(arg0) {
            const ret = getObject(arg0).deltaMode;
            return ret;
        },
        __wbg_deltaX_948c3a4bd666561a: function(arg0) {
            const ret = getObject(arg0).deltaX;
            return ret;
        },
        __wbg_deltaY_635e57899c7ee3a1: function(arg0) {
            const ret = getObject(arg0).deltaY;
            return ret;
        },
        __wbg_devicePixelContentBoxSize_b18683fceddaada3: function(arg0) {
            const ret = getObject(arg0).devicePixelContentBoxSize;
            return addHeapObject(ret);
        },
        __wbg_devicePixelRatio_da557bfb3b99fb02: function(arg0) {
            const ret = getObject(arg0).devicePixelRatio;
            return ret;
        },
        __wbg_disconnect_8a5b253407e50a15: function(arg0) {
            getObject(arg0).disconnect();
        },
        __wbg_disconnect_cef5c809f09463bb: function(arg0) {
            getObject(arg0).disconnect();
        },
        __wbg_document_c7f486c52d63d24e: function(arg0) {
            const ret = getObject(arg0).document;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_error_757e9472f8410341: function(arg0, arg1) {
            let deferred0_0;
            let deferred0_1;
            try {
                deferred0_0 = arg0;
                deferred0_1 = arg1;
                console.error(getStringFromWasm0(arg0, arg1));
            } finally {
                wasm.__wbindgen_export4(deferred0_0, deferred0_1, 1);
            }
        },
        __wbg_error_b7e73e671a58a488: function(arg0, arg1) {
            console.error(getObject(arg0), getObject(arg1));
        },
        __wbg_exitFullscreen_68433121607a460e: function(arg0) {
            getObject(arg0).exitFullscreen();
        },
        __wbg_exitPointerLock_618bb1a9e031f7e0: function(arg0) {
            getObject(arg0).exitPointerLock();
        },
        __wbg_fetch_079086473aeec73d: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).fetch(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        },
        __wbg_fetch_dde0fc0522f3018f: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).fetch(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        },
        __wbg_focus_c1b2d4962209010b: function() { return handleError(function (arg0) {
            getObject(arg0).focus();
        }, arguments); },
        __wbg_fullscreenElement_ed7ec71fb58bcc4f: function(arg0) {
            const ret = getObject(arg0).fullscreenElement;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_getBoundingClientRect_299f40f8641457e6: function(arg0) {
            const ret = getObject(arg0).getBoundingClientRect();
            return addHeapObject(ret);
        },
        __wbg_getCoalescedEvents_3e003f63d9ebbc05: function(arg0) {
            const ret = getObject(arg0).getCoalescedEvents;
            return addHeapObject(ret);
        },
        __wbg_getCoalescedEvents_52c8badb417d6e40: function(arg0) {
            const ret = getObject(arg0).getCoalescedEvents();
            return addHeapObject(ret);
        },
        __wbg_getComputedStyle_89f9e5c4de4b7edf: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).getComputedStyle(getObject(arg1));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_getItem_5d579ac5f70ace34: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).getItem(getStringFromWasm0(arg2, arg3));
            var ptr1 = isLikeNone(ret) ? 0 : passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            var len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_getOwnPropertyDescriptor_4a4c6c46eaaf8da4: function(arg0, arg1) {
            const ret = Object.getOwnPropertyDescriptor(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_getPropertyValue_778f881c5d299730: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).getPropertyValue(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_get_b1f0ab13c737f856: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return addHeapObject(ret);
        },
        __wbg_get_unchecked_363572bdd397d473: function(arg0, arg1) {
            const ret = getObject(arg0)[arg1 >>> 0];
            return addHeapObject(ret);
        },
        __wbg_has_464f8b9416279d65: function() { return handleError(function (arg0, arg1) {
            const ret = Reflect.has(getObject(arg0), getObject(arg1));
            return ret;
        }, arguments); },
        __wbg_height_d011730144e088ea: function(arg0) {
            const ret = getObject(arg0).height;
            return ret;
        },
        __wbg_inlineSize_199278605b83587a: function(arg0) {
            const ret = getObject(arg0).inlineSize;
            return ret;
        },
        __wbg_instanceof_HtmlCanvasElement_4d7e131643d814c1: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof HTMLCanvasElement;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Response_6366a785e400039b: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Response;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_instanceof_Window_a3b8566f0a9c5d1a: function(arg0) {
            let result;
            try {
                result = getObject(arg0) instanceof Window;
            } catch (_) {
                result = false;
            }
            const ret = result;
            return ret;
        },
        __wbg_isIntersecting_4b154fb6df9d9a6d: function(arg0) {
            const ret = getObject(arg0).isIntersecting;
            return ret;
        },
        __wbg_is_61443cc073056436: function(arg0, arg1) {
            const ret = Object.is(getObject(arg0), getObject(arg1));
            return ret;
        },
        __wbg_key_d29d670923b81510: function(arg0, arg1) {
            const ret = getObject(arg1).key;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_length_31bdaf014f5fbde2: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_length_4e1adc0d42e23620: function(arg0) {
            const ret = getObject(arg0).length;
            return ret;
        },
        __wbg_localStorage_72d815b9c2adaaad: function() { return handleError(function (arg0) {
            const ret = getObject(arg0).localStorage;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_location_4cfd4b7727d1ad11: function(arg0) {
            const ret = getObject(arg0).location;
            return ret;
        },
        __wbg_matchMedia_0e1d9f8bfb0f1f46: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).matchMedia(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_matches_0c791086704a6cb5: function(arg0) {
            const ret = getObject(arg0).matches;
            return ret;
        },
        __wbg_media_3c7312769177acdf: function(arg0, arg1) {
            const ret = getObject(arg1).media;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_metaKey_3f9183dfd5e1b726: function(arg0) {
            const ret = getObject(arg0).metaKey;
            return ret;
        },
        __wbg_metaKey_feb71e77f26b1a4c: function(arg0) {
            const ret = getObject(arg0).metaKey;
            return ret;
        },
        __wbg_movementX_62898caae699dffe: function(arg0) {
            const ret = getObject(arg0).movementX;
            return ret;
        },
        __wbg_movementY_b1dec3289b6b61b0: function(arg0) {
            const ret = getObject(arg0).movementY;
            return ret;
        },
        __wbg_navigator_d217ca64c4bbff48: function(arg0) {
            const ret = getObject(arg0).navigator;
            return addHeapObject(ret);
        },
        __wbg_new_1da3429bc3c4541c: function(arg0) {
            const ret = new Uint8Array(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_new_227d7c05414eb861: function() {
            const ret = new Error();
            return addHeapObject(ret);
        },
        __wbg_new_a313bf260f9bdcc3: function() { return handleError(function (arg0, arg1) {
            const ret = new Worker(getStringFromWasm0(arg0, arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_baa0a0207935dd43: function() { return handleError(function () {
            const ret = new AbortController();
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_bebc3f4757acf305: function() {
            const ret = new Object();
            return addHeapObject(ret);
        },
        __wbg_new_c4580c9df5672fa0: function() { return handleError(function (arg0) {
            const ret = new IntersectionObserver(getObject(arg0));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_d0cecdd4b12bd7a1: function() { return handleError(function (arg0) {
            const ret = new ResizeObserver(getObject(arg0));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_d29385e3b529c998: function() { return handleError(function () {
            const ret = new MessageChannel();
            return addHeapObject(ret);
        }, arguments); },
        __wbg_new_with_str_sequence_and_options_01ed9e0eee2dee62: function() { return handleError(function (arg0, arg1) {
            const ret = new Blob(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_now_0b7736bc17fd7719: function(arg0) {
            const ret = getObject(arg0).now();
            return ret;
        },
        __wbg_now_e7c6795a7f81e10f: function(arg0) {
            const ret = getObject(arg0).now();
            return ret;
        },
        __wbg_observe_232627fdd95d3d31: function(arg0, arg1) {
            getObject(arg0).observe(getObject(arg1));
        },
        __wbg_observe_756a715b58148858: function(arg0, arg1, arg2) {
            getObject(arg0).observe(getObject(arg1), getObject(arg2));
        },
        __wbg_observe_bc1f04a1edf992f1: function(arg0, arg1) {
            getObject(arg0).observe(getObject(arg1));
        },
        __wbg_of_1a3f47170341cefe: function(arg0) {
            const ret = Array.of(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_of_1c173c2ad96e2f7e: function(arg0, arg1) {
            const ret = Array.of(getObject(arg0), getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_offsetX_a9bf2ea7f0575ac9: function(arg0) {
            const ret = getObject(arg0).offsetX;
            return ret;
        },
        __wbg_offsetY_10e5433a1bbd4c01: function(arg0) {
            const ret = getObject(arg0).offsetY;
            return ret;
        },
        __wbg_performance_3fcf6e32a7e1ed0a: function(arg0) {
            const ret = getObject(arg0).performance;
            return addHeapObject(ret);
        },
        __wbg_performance_d96ad0b441f4510a: function(arg0) {
            const ret = getObject(arg0).performance;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_persisted_d62432fd840e3288: function(arg0) {
            const ret = getObject(arg0).persisted;
            return ret;
        },
        __wbg_play_3997a1be51d27925: function(arg0) {
            getObject(arg0).play();
        },
        __wbg_pointerId_b8c496f0172b1473: function(arg0) {
            const ret = getObject(arg0).pointerId;
            return ret;
        },
        __wbg_pointerType_753a9c4f0e3018cc: function(arg0, arg1) {
            const ret = getObject(arg1).pointerType;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_port1_b0733193296d7a5e: function(arg0) {
            const ret = getObject(arg0).port1;
            return addHeapObject(ret);
        },
        __wbg_port2_67ad56c6c0fbc6e0: function(arg0) {
            const ret = getObject(arg0).port2;
            return addHeapObject(ret);
        },
        __wbg_postMessage_141ac2f98c91b91b: function() { return handleError(function (arg0, arg1, arg2) {
            getObject(arg0).postMessage(getObject(arg1), getObject(arg2));
        }, arguments); },
        __wbg_postMessage_dda77c4ed589be84: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).postMessage(getObject(arg1));
        }, arguments); },
        __wbg_postTask_e2439afddcdfbb55: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).postTask(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        },
        __wbg_pressure_1021f185ca9ffe6b: function(arg0) {
            const ret = getObject(arg0).pressure;
            return ret;
        },
        __wbg_preventDefault_4235a4ccf8540533: function(arg0) {
            getObject(arg0).preventDefault();
        },
        __wbg_prototype_0d5bb2023db3bcfc: function() {
            const ret = ResizeObserverEntry.prototype;
            return addHeapObject(ret);
        },
        __wbg_prototypesetcall_ae9f5e7459250748: function(arg0, arg1, arg2) {
            Uint8Array.prototype.set.call(getArrayU8FromWasm0(arg0, arg1), getObject(arg2));
        },
        __wbg_querySelector_5b1d9ebad373dc9d: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).querySelector(getStringFromWasm0(arg1, arg2));
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        }, arguments); },
        __wbg_queueMicrotask_6913321b637d352e: function(arg0) {
            queueMicrotask(getObject(arg0));
        },
        __wbg_queueMicrotask_85c90f6987555d65: function(arg0) {
            const ret = getObject(arg0).queueMicrotask;
            return addHeapObject(ret);
        },
        __wbg_queueMicrotask_f173251ad502837f: function(arg0, arg1) {
            getObject(arg0).queueMicrotask(getObject(arg1));
        },
        __wbg_queueMicrotask_f6a1fa10b81d1fc0: function(arg0) {
            queueMicrotask(getObject(arg0));
        },
        __wbg_readText_5f3be1c6a378100f: function(arg0) {
            const ret = getObject(arg0).readText();
            return addHeapObject(ret);
        },
        __wbg_removeEventListener_4c9706814dcfaf79: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            getObject(arg0).removeEventListener(getStringFromWasm0(arg1, arg2), getObject(arg3));
        }, arguments); },
        __wbg_removeListener_5a1b70f595f5cba6: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).removeListener(getObject(arg1));
        }, arguments); },
        __wbg_removeProperty_25befad3d8dc7839: function() { return handleError(function (arg0, arg1, arg2, arg3) {
            const ret = getObject(arg1).removeProperty(getStringFromWasm0(arg2, arg3));
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_repeat_01e85ccb1bcef326: function(arg0) {
            const ret = getObject(arg0).repeat;
            return ret;
        },
        __wbg_requestAnimationFrame_4988887658fcee2e: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).requestAnimationFrame(getObject(arg1));
            return ret;
        }, arguments); },
        __wbg_requestFullscreen_3f16e43f398ce624: function(arg0) {
            const ret = getObject(arg0).requestFullscreen();
            return addHeapObject(ret);
        },
        __wbg_requestFullscreen_b977a3a0697e883c: function(arg0) {
            const ret = getObject(arg0).requestFullscreen;
            return addHeapObject(ret);
        },
        __wbg_requestIdleCallback_3689e3e38f6cfc02: function(arg0) {
            const ret = getObject(arg0).requestIdleCallback;
            return addHeapObject(ret);
        },
        __wbg_requestIdleCallback_a3ab6672665bc9a2: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).requestIdleCallback(getObject(arg1));
            return ret;
        }, arguments); },
        __wbg_requestPointerLock_79e2ffd38e8dbdfa: function(arg0) {
            getObject(arg0).requestPointerLock();
        },
        __wbg_resolve_35ec7e0c6af4c82c: function(arg0) {
            const ret = Promise.resolve(getObject(arg0));
            return addHeapObject(ret);
        },
        __wbg_revokeObjectURL_a970dba2663e007c: function() { return handleError(function (arg0, arg1) {
            URL.revokeObjectURL(getStringFromWasm0(arg0, arg1));
        }, arguments); },
        __wbg_scheduler_a17d41c9c822fc26: function(arg0) {
            const ret = getObject(arg0).scheduler;
            return addHeapObject(ret);
        },
        __wbg_scheduler_b35fe73ba70e89cc: function(arg0) {
            const ret = getObject(arg0).scheduler;
            return addHeapObject(ret);
        },
        __wbg_setAttribute_8c84e9351986b1f6: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setAttribute(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setItem_51f02f76b24c5d18: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setItem(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setPointerCapture_b8446eaac3edc11e: function() { return handleError(function (arg0, arg1) {
            getObject(arg0).setPointerCapture(arg1);
        }, arguments); },
        __wbg_setProperty_6139dd07828b5817: function() { return handleError(function (arg0, arg1, arg2, arg3, arg4) {
            getObject(arg0).setProperty(getStringFromWasm0(arg1, arg2), getStringFromWasm0(arg3, arg4));
        }, arguments); },
        __wbg_setTimeout_7b1dfbeaccbf9bb6: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = getObject(arg0).setTimeout(getObject(arg1), arg2);
            return ret;
        }, arguments); },
        __wbg_setTimeout_f511da46f7279b2b: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg0).setTimeout(getObject(arg1));
            return ret;
        }, arguments); },
        __wbg_set_a377297433dfea63: function() { return handleError(function (arg0, arg1, arg2) {
            const ret = Reflect.set(getObject(arg0), getObject(arg1), getObject(arg2));
            return ret;
        }, arguments); },
        __wbg_set_box_334f2086d2b008d0: function(arg0, arg1) {
            getObject(arg0).box = __wbindgen_enum_ResizeObserverBoxOptions[arg1];
        },
        __wbg_set_onmessage_1feaa3e121748d93: function(arg0, arg1) {
            getObject(arg0).onmessage = getObject(arg1);
        },
        __wbg_set_type_69954a3c7c11a724: function(arg0, arg1, arg2) {
            getObject(arg0).type = getStringFromWasm0(arg1, arg2);
        },
        __wbg_shiftKey_2b651c3e5a9c07f5: function(arg0) {
            const ret = getObject(arg0).shiftKey;
            return ret;
        },
        __wbg_shiftKey_9dd20e0fb9da6eb5: function(arg0) {
            const ret = getObject(arg0).shiftKey;
            return ret;
        },
        __wbg_signal_45367c6c2255877a: function(arg0) {
            const ret = getObject(arg0).signal;
            return addHeapObject(ret);
        },
        __wbg_stack_3b0d974bbf31e44f: function(arg0, arg1) {
            const ret = getObject(arg1).stack;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        },
        __wbg_start_a5f7d46ef74dd76f: function(arg0) {
            getObject(arg0).start();
        },
        __wbg_static_accessor_GLOBAL_8eb4cd83130a11a0: function() {
            const ret = typeof global === 'undefined' ? null : global;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_GLOBAL_THIS_1e7044f654e934db: function() {
            const ret = typeof globalThis === 'undefined' ? null : globalThis;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_SELF_d8b50611246a6d92: function() {
            const ret = typeof self === 'undefined' ? null : self;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_static_accessor_WINDOW_fd0bc376bf0f8b42: function() {
            const ret = typeof window === 'undefined' ? null : window;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_status_88ccc72fe7bea621: function(arg0) {
            const ret = getObject(arg0).status;
            return ret;
        },
        __wbg_stringify_54b3d9b61602aee6: function() { return handleError(function (arg0) {
            const ret = JSON.stringify(getObject(arg0));
            return addHeapObject(ret);
        }, arguments); },
        __wbg_style_b79c69cee0c004b9: function(arg0) {
            const ret = getObject(arg0).style;
            return addHeapObject(ret);
        },
        __wbg_then_7a850dae4493f353: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).then(getObject(arg1), getObject(arg2));
            return addHeapObject(ret);
        },
        __wbg_then_b830475380919203: function(arg0, arg1) {
            const ret = getObject(arg0).then(getObject(arg1));
            return addHeapObject(ret);
        },
        __wbg_unobserve_a811aa8fa2d41747: function(arg0, arg1) {
            getObject(arg0).unobserve(getObject(arg1));
        },
        __wbg_userAgentData_31b8f893e8977e94: function(arg0) {
            const ret = getObject(arg0).userAgentData;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_userAgent_8f029431f94bc023: function() { return handleError(function (arg0, arg1) {
            const ret = getObject(arg1).userAgent;
            const ptr1 = passStringToWasm0(ret, wasm.__wbindgen_export, wasm.__wbindgen_export2);
            const len1 = WASM_VECTOR_LEN;
            getDataViewMemory0().setInt32(arg0 + 4 * 1, len1, true);
            getDataViewMemory0().setInt32(arg0 + 4 * 0, ptr1, true);
        }, arguments); },
        __wbg_visibilityState_772c1fee874f04fe: function(arg0) {
            const ret = getObject(arg0).visibilityState;
            return (__wbindgen_enum_VisibilityState.indexOf(ret) + 1 || 3) - 1;
        },
        __wbg_webkitExitFullscreen_f487871f11a8185e: function(arg0) {
            getObject(arg0).webkitExitFullscreen();
        },
        __wbg_webkitFullscreenElement_4055d847f8ff064e: function(arg0) {
            const ret = getObject(arg0).webkitFullscreenElement;
            return isLikeNone(ret) ? 0 : addHeapObject(ret);
        },
        __wbg_webkitRequestFullscreen_c4ec4df7be373ffd: function(arg0) {
            getObject(arg0).webkitRequestFullscreen();
        },
        __wbg_width_66ae60ec9345f56c: function(arg0) {
            const ret = getObject(arg0).width;
            return ret;
        },
        __wbg_writeText_efbdad9c92eb55b9: function(arg0, arg1, arg2) {
            const ret = getObject(arg0).writeText(getStringFromWasm0(arg1, arg2));
            return addHeapObject(ret);
        },
        __wbg_x_09473e91feed7557: function(arg0) {
            const ret = getObject(arg0).x;
            return ret;
        },
        __wbg_y_9897bd94adafed0f: function(arg0) {
            const ret = getObject(arg0).y;
            return ret;
        },
        __wbindgen_generic_0000000000000001: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 91737, ret: Result(Unit), inner_ret: Some(Result(Unit)) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_143494);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000002: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 93273, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_153080);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000003: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [Externref], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000004: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>"), NamedExternref("ResizeObserver")], shim_idx: 93430, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154062);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000005: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Array<any>")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_4);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000006: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("Event")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_5);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000007: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("FocusEvent")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_6);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000008: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("KeyboardEvent")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_7);
            return addHeapObject(ret);
        },
        __wbindgen_generic_0000000000000009: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PageTransitionEvent")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_8);
            return addHeapObject(ret);
        },
        __wbindgen_generic_000000000000000a: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("PointerEvent")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_9);
            return addHeapObject(ret);
        },
        __wbindgen_generic_000000000000000b: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [NamedExternref("WheelEvent")], shim_idx: 93429, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154061_10);
            return addHeapObject(ret);
        },
        __wbindgen_generic_000000000000000c: function(arg0, arg1) {
            // Cast intrinsic for `Closure(Closure { owned: true, function: Function { arguments: [], shim_idx: 93428, ret: Unit, inner_ret: Some(Unit) }, mutable: true }) -> Externref`.
            const ret = makeMutClosure(arg0, arg1, __wasm_bindgen_func_elem_154060);
            return addHeapObject(ret);
        },
        __wbindgen_generic_000000000000000d: function(arg0) {
            // Cast intrinsic for `F64 -> Externref`.
            const ret = arg0;
            return addHeapObject(ret);
        },
        __wbindgen_generic_000000000000000e: function(arg0, arg1) {
            // Cast intrinsic for `Ref(String) -> Externref`.
            const ret = getStringFromWasm0(arg0, arg1);
            return addHeapObject(ret);
        },
        __wbindgen_object_clone_ref: function(arg0) {
            const ret = getObject(arg0);
            return addHeapObject(ret);
        },
        __wbindgen_object_drop_ref: function(arg0) {
            takeObject(arg0);
        },
    };
    return {
        __proto__: null,
        "./the_stack-74c2a9b672d9b31a_bg.js": import0,
    };
}

function __wasm_bindgen_func_elem_154060(arg0, arg1) {
    wasm.__wasm_bindgen_func_elem_154060(arg0, arg1);
}

function __wasm_bindgen_func_elem_153080(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_153080(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_4(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_4(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_5(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_5(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_6(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_6(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_7(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_7(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_8(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_8(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_9(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_9(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_154061_10(arg0, arg1, arg2) {
    wasm.__wasm_bindgen_func_elem_154061_10(arg0, arg1, addHeapObject(arg2));
}

function __wasm_bindgen_func_elem_143494(arg0, arg1, arg2) {
    try {
        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);
        wasm.__wasm_bindgen_func_elem_143494(retptr, arg0, arg1, addHeapObject(arg2));
        var r0 = getDataViewMemory0().getInt32(retptr + 4 * 0, true);
        var r1 = getDataViewMemory0().getInt32(retptr + 4 * 1, true);
        if (r1) {
            throw takeObject(r0);
        }
    } finally {
        wasm.__wbindgen_add_to_stack_pointer(16);
    }
}

function __wasm_bindgen_func_elem_154062(arg0, arg1, arg2, arg3) {
    wasm.__wasm_bindgen_func_elem_154062(arg0, arg1, addHeapObject(arg2), addHeapObject(arg3));
}


const __wbindgen_enum_ResizeObserverBoxOptions = ["border-box", "content-box", "device-pixel-content-box"];


const __wbindgen_enum_VisibilityState = ["hidden", "visible"];

function addHeapObject(obj) {
    if (heap_next === heap.length) heap.push(heap.length + 1);
    const idx = heap_next;
    heap_next = heap[idx];

    heap[idx] = obj;
    return idx;
}

const CLOSURE_DTORS = (typeof FinalizationRegistry === 'undefined')
    ? { register: () => {}, unregister: () => {} }
    : new FinalizationRegistry(state => wasm.__wbindgen_export5(state.a, state.b));

function debugString(val) {
    // primitive types
    const type = typeof val;
    if (type == 'number' || type == 'boolean' || val == null) {
        return  `${val}`;
    }
    if (type == 'string') {
        return `"${val}"`;
    }
    if (type == 'symbol') {
        const description = val.description;
        if (description == null) {
            return 'Symbol';
        } else {
            return `Symbol(${description})`;
        }
    }
    if (type == 'function') {
        const name = val.name;
        if (typeof name == 'string' && name.length > 0) {
            return `Function(${name})`;
        } else {
            return 'Function';
        }
    }
    // objects
    if (Array.isArray(val)) {
        const length = val.length;
        let debug = '[';
        if (length > 0) {
            debug += debugString(val[0]);
        }
        for(let i = 1; i < length; i++) {
            debug += ', ' + debugString(val[i]);
        }
        debug += ']';
        return debug;
    }
    // Test for built-in
    const builtInMatches = /\[object ([^\]]+)\]/.exec(toString.call(val));
    let className;
    if (builtInMatches && builtInMatches.length > 1) {
        className = builtInMatches[1];
    } else {
        // Failed to match the standard '[object ClassName]'
        return toString.call(val);
    }
    if (className == 'Object') {
        // we're a user defined class or Object
        // JSON.stringify avoids problems with cycles, and is generally much
        // easier than looping through ownProperties of `val`.
        try {
            return 'Object(' + JSON.stringify(val) + ')';
        } catch (_) {
            return 'Object';
        }
    }
    // errors
    if (val instanceof Error) {
        return `${val.name}: ${val.message}\n${val.stack}`;
    }
    // TODO we could test for more things here, like `Set`s and `Map`s.
    return className;
}

function dropObject(idx) {
    if (idx < 1028) return;
    heap[idx] = heap_next;
    heap_next = idx;
}

function getArrayU8FromWasm0(ptr, len) {
    ptr = ptr >>> 0;
    return getUint8ArrayMemory0().subarray(ptr / 1, ptr / 1 + len);
}

let cachedDataViewMemory0 = null;
function getDataViewMemory0() {
    if (cachedDataViewMemory0 === null || cachedDataViewMemory0.buffer.detached === true || (cachedDataViewMemory0.buffer.detached === undefined && cachedDataViewMemory0.buffer !== wasm.memory.buffer)) {
        cachedDataViewMemory0 = new DataView(wasm.memory.buffer);
    }
    return cachedDataViewMemory0;
}

function getStringFromWasm0(ptr, len) {
    return decodeText(ptr >>> 0, len);
}

let cachedUint8ArrayMemory0 = null;
function getUint8ArrayMemory0() {
    if (cachedUint8ArrayMemory0 === null || cachedUint8ArrayMemory0.byteLength === 0) {
        cachedUint8ArrayMemory0 = new Uint8Array(wasm.memory.buffer);
    }
    return cachedUint8ArrayMemory0;
}

function getObject(idx) { return heap[idx]; }

function handleError(f, args) {
    try {
        return f.apply(this, args);
    } catch (e) {
        wasm.__wbindgen_export3(addHeapObject(e));
    }
}

let heap = new Array(1024).fill(undefined);
heap.push(undefined, null, true, false);

let heap_next = heap.length;

function isLikeNone(x) {
    return x === undefined || x === null;
}

function makeMutClosure(arg0, arg1, f) {
    const state = { a: arg0, b: arg1, cnt: 1 };
    const real = (...args) => {

        // First up with a closure we increment the internal reference
        // count. This ensures that the Rust closure environment won't
        // be deallocated while we're invoking it.
        state.cnt++;
        const a = state.a;
        state.a = 0;
        try {
            return f(a, state.b, ...args);
        } finally {
            state.a = a;
            real._wbg_cb_unref();
        }
    };
    real._wbg_cb_unref = () => {
        if (--state.cnt === 0) {
            wasm.__wbindgen_export5(state.a, state.b);
            state.a = 0;
            CLOSURE_DTORS.unregister(state);
        }
    };
    CLOSURE_DTORS.register(real, state, state);
    return real;
}

function passStringToWasm0(arg, malloc, realloc) {
    if (realloc === undefined) {
        const buf = cachedTextEncoder.encode(arg);
        const ptr = malloc(buf.length, 1) >>> 0;
        getUint8ArrayMemory0().subarray(ptr, ptr + buf.length).set(buf);
        WASM_VECTOR_LEN = buf.length;
        return ptr;
    }

    let len = arg.length;
    let ptr = malloc(len, 1) >>> 0;

    const mem = getUint8ArrayMemory0();

    let offset = 0;

    for (; offset < len; offset++) {
        const code = arg.charCodeAt(offset);
        if (code > 0x7F) break;
        mem[ptr + offset] = code;
    }
    if (offset !== len) {
        if (offset !== 0) {
            arg = arg.slice(offset);
        }
        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;
        const view = getUint8ArrayMemory0().subarray(ptr + offset, ptr + len);
        const ret = cachedTextEncoder.encodeInto(arg, view);

        offset += ret.written;
        ptr = realloc(ptr, len, offset, 1) >>> 0;
    }

    WASM_VECTOR_LEN = offset;
    return ptr;
}

function takeObject(idx) {
    const ret = getObject(idx);
    dropObject(idx);
    return ret;
}

let cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
cachedTextDecoder.decode();
const MAX_SAFARI_DECODE_BYTES = 2146435072;
let numBytesDecoded = 0;
function decodeText(ptr, len) {
    numBytesDecoded += len;
    if (numBytesDecoded >= MAX_SAFARI_DECODE_BYTES) {
        cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });
        cachedTextDecoder.decode();
        numBytesDecoded = len;
    }
    return cachedTextDecoder.decode(getUint8ArrayMemory0().subarray(ptr, ptr + len));
}

const cachedTextEncoder = new TextEncoder();

if (!('encodeInto' in cachedTextEncoder)) {
    cachedTextEncoder.encodeInto = function (arg, view) {
        const buf = cachedTextEncoder.encode(arg);
        view.set(buf);
        return {
            read: arg.length,
            written: buf.length
        };
    };
}

let WASM_VECTOR_LEN = 0;

let wasmModule, wasmInstance, wasm;
function __wbg_finalize_init(instance, module) {
    wasmInstance = instance;
    wasm = instance.exports;
    wasmModule = module;
    cachedDataViewMemory0 = null;
    cachedUint8ArrayMemory0 = null;
    wasm.__wbindgen_start();
    return wasm;
}

async function __wbg_load(module, imports) {
    if (typeof Response === 'function' && module instanceof Response) {
        if (!module.ok) {
            throw new Error(`failed to fetch Wasm: ${module.status} ${module.statusText} fetching '${module.url}'`);
        }

        if (typeof WebAssembly.instantiateStreaming === 'function') {
            try {
                return await WebAssembly.instantiateStreaming(module, imports);
            } catch (e) {
                const validResponse = expectedResponseType(module.type);

                if (validResponse && module.headers.get('Content-Type') !== 'application/wasm') {
                    console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve Wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", e);

                } else { throw e; }
            }
        }

        const bytes = await module.arrayBuffer();
        return await WebAssembly.instantiate(bytes, imports);
    } else {
        const instance = await WebAssembly.instantiate(module, imports);

        if (instance instanceof WebAssembly.Instance) {
            return { instance, module };
        } else {
            return instance;
        }
    }

    function expectedResponseType(type) {
        switch (type) {
            case 'basic': case 'cors': case 'default': return true;
        }
        return false;
    }
}

function initSync(module) {
    if (wasm !== undefined) return wasm;


    if (module !== undefined) {
        if (Object.getPrototypeOf(module) === Object.prototype) {
            ({module} = module)
        } else {
            console.warn('using deprecated parameters for `initSync()`; pass a single object instead')
        }
    }

    const imports = __wbg_get_imports();
    if (!(module instanceof WebAssembly.Module)) {
        module = new WebAssembly.Module(module);
    }
    const instance = new WebAssembly.Instance(module, imports);
    return __wbg_finalize_init(instance, module);
}

async function __wbg_init(module_or_path) {
    if (wasm !== undefined) return wasm;


    if (module_or_path !== undefined) {
        if (Object.getPrototypeOf(module_or_path) === Object.prototype) {
            ({module_or_path} = module_or_path)
        } else {
            console.warn('using deprecated parameters for the initialization function; pass a single object instead')
        }
    }

    if (module_or_path === undefined) {
        module_or_path = new URL('the_stack_bg.wasm', import.meta.url);
    }
    const imports = __wbg_get_imports();

    if (typeof module_or_path === 'string' || (typeof Request === 'function' && module_or_path instanceof Request) || (typeof URL === 'function' && module_or_path instanceof URL)) {
        module_or_path = fetch(module_or_path);
    }

    const { instance, module } = await __wbg_load(await module_or_path, imports);

    return __wbg_finalize_init(instance, module);
}

export { initSync, __wbg_init as default };
