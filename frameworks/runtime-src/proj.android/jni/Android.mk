LOCAL_PATH := $(call my-dir)

include $(CLEAR_VARS)

LOCAL_MODULE := cocos2djs_shared

LOCAL_MODULE_FILENAME := libcocos2djs

LOCAL_ARM_MODE := arm

LOCAL_SRC_FILES := \
../../Classes/AppDelegate.cpp \
../../Classes/ide-support/SimpleConfigParser.cpp \
../../Classes/ide-support/RuntimeJsImpl.cpp \
hellojavascript/main.cpp

LOCAL_C_INCLUDES := $(LOCAL_PATH)/../../Classes 

LOCAL_STATIC_LIBRARIES := cocos2d_js_static
LOCAL_STATIC_LIBRARIES += cocos2d_simulator_static
LOCAL_WHOLE_STATIC_LIBRARIES += jsb_pluginx_static

include $(BUILD_SHARED_LIBRARY)


$(call import-module,scripting/js-bindings/proj.android)
$(call import-module,tools/simulator/libsimulator/proj.android)
$(call import-module,plugin/jsbindings)