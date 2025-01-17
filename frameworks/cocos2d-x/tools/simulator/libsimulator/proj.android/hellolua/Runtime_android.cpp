#include <jni.h>
#include <android/log.h>
#include "jni/JniHelper.h"
#include <string>
#include <vector>
using namespace std;
using namespace cocos2d;

static std::string FRAMEWORK_ACTIVITY_PATH("com/gsn/baseframework/FrameworkActivity");

void setActivityPathForAndroid(const std::string& path)
{
    FRAMEWORK_ACTIVITY_PATH = path;
}

string getIPAddress()
{
	JniMethodInfo t;
    string IPAddress("");

    if (JniHelper::getStaticMethodInfo(t, FRAMEWORK_ACTIVITY_PATH.c_str(), "getLocalIpAddress", "()Ljava/lang/String;")) {
        jstring str = (jstring)t.env->CallStaticObjectMethod(t.classID, t.methodID);
        t.env->DeleteLocalRef(t.classID);
        IPAddress = JniHelper::jstring2string(str);
        t.env->DeleteLocalRef(str);
    }
    return IPAddress;
}
